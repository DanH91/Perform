import _ from 'lodash-fp';

export default (() => {
  return {
    initialize,
    create
  };
})();

/**
  * Create a work.
  * @param  {string} script - worker script.
  * @return {object} taskHandler  -  worker wrapper object.
  */
function create(script) {
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
