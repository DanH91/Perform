import {isString, map, last} from 'lodash-fp';

/**
  * Spawn a dedicated worker.
  * @param  {(string | [function])} script - worker script.
  * @return {object} worker - spawned worker.
  */
export default function create(script) {
  return new window.Worker(
    isString(script) ? script : createScript(script)
  );
}

/**
  * Create Tranferable script.
  * @param  {[function]} scripts - worker script.
  * @return {string} objectURL - object URL of script Blob.
  */
export function createScript(scripts) {
  return createTransferable(
    map(script => {
      if (last([].concat(scripts)) === script) {
        return script.toString().match(/function[^{]+\{([\s\S]*)\}$/)[1];
      }
      return script.toString();
    }, [].concat(scripts)).join('\n')
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
