import {isString, isFunction, map, last} from 'lodash-fp';

/**
  * Spawn a dedicated worker.
  * @param  {string|Array} script - js file or an array of functions and or strings.
  * @return {object} worker - spawned worker.
  */
export default function create(script) {
  return new self.Worker(
    isString(script) ? script : createScript(script)
  );
}

/**
  * Create Tranferable script.
  * @param  {function[]} scripts - worker script.
  * @return {string} objectURL - object URL of script Blob.
  */
export function createScript(scripts) {
  return createTransferrable(
    map(script => {
      if (last([].concat(scripts)) === script && isFunction(script)) {
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
export function createTransferrable(text) {
  return self.URL.createObjectURL(new self.Blob([`${text}`]));
}
