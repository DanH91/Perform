import _ from 'lodash-fp';

export default (() => {
  return {
    initialize,
    spawn
  };
})();

/**
  * Spawn a dedicated worker.
  * @param  {string} script - worker script.
  * @return {object} worker wrapper  -  worker wrapper object.
  */
function spawn(script) {
  let w = new Worker(script);
  return {
    subscribe(callback) {
      w.onmessage = callback;
    }
  };
}

/**
 * Check worker support
 * @return {Bool} suppport
 */
function initialize() {
  return _.isFunction(Worker);
}
