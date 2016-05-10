import {isFunction} from 'lodash-fp';

/**
  * Spawn a dedicated worker.
  * @param  {(string | function)} script - worker script.
  * @return {object} worker - spawned worker.
  */
export default function create(script) {
  return new window.Worker(
    isFunction(script) ? createScript(script) : script
  );
}

/**
  * Create Tranferable script.
  * @param  {string} script - worker script.
  * @return {string} objectURL - object URL of script Blob.
  */
export function createScript(script) {
  return createTransferable(
    script.toString().match(/function[^{]+\{([\s\S]*)\}$/)[1]
  );
}

/**
  * Create ObjectURL from Blob.
  * @param  {string} text - worker script.
  * @return {string} objectURL  - object URL of script Blob.
  */
export function createTransferable(text) {
  return window.URL.createObjectURL(new window.Blob([`${text}`]));
}
