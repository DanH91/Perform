import isString from 'lodash.isstring';
import last from 'lodash.last';
import isFunction from 'lodash.isfunction';

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
  let list = [].concat(scripts);
  return createTransferrable(
    list.map(script => {
      if (last(list) === script && isFunction(script)) {
        return script.toString().match(/function[^{]+\{([\s\S]*)\}$/)[1];
      }
      return script.toString();
    }).join('\n')
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
