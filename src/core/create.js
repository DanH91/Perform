import {isFunction} from 'lodash-fp';

/**
  * Spawn a dedicated worker.
  * @param  {(string | function)} script - worker script.
  * @return {object} worker  - spawned worker.
  */
export default function create(script) {
  return new window.Worker(
    isFunction(script) ? createTransferable(script) : script
  );
}

/**
  * Create ObjectURL from script Blob.
  * @param  {string} script - worker script.
  * @return {string} objectURL  - object URL of script Blob.
  */
export function createTransferable(script) {
  return window.URL.createObjectURL(new window.Blob([
    `${script.toString().match(/function[^{]+\{([\s\S]*)\}$/)[1]}`
  ]));
}
