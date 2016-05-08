import _ from 'lodash-fp';
import Rx from 'rxjs';

export default (() => {
  return {
    initialize,
    spawn
  };
})();

/**
 * Check worker support
 * @return {Bool} suppport
 */
function initialize() {
  return _.isFunction(window.Worker);
}

/**
  * Spawn a dedicated worker.
  * @param  {string} script - worker script.
  * @return {object} worker wrapper  -  worker wrapper object.
  */
function spawn(script) {
  let w = new window.Worker(script);
  let observer = new Rx.Subject();
  w.onmessage = _Callback;
  let ctx = {
    map
  };
  return ctx;

  /**
   * Map over stream of worker event data.
   * @param  {function} callback .
   * @return {object} token - subscription token.
   */
  function map(callback) {
    return observer.subscribe(callback);
  }

  /**
   * Worker message event callback.
   * @param  {object} event .
   */
  function _Callback(event) {
    observer.next(event.data);
  }
}
