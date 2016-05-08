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
  w.onmessage = _Next;
  w.onerror = _Error;
  let ctx = {
    subscribe,
    stop
  };
  return ctx;

  /**
   * Terminate worker and complete observable.
   */
  function stop() {
    w.terminate();
    observer.complete();
  }

  /**
   * Map over stream of worker event data.
   * @param  {function} onNext - on next value callback.
   * @param  {function} onError - on error value callback.
   * @param  {function} onComplete - on complete value callback.
   * @return {object} token - subscription token.
   */
  function subscribe(onNext, onError, onComplete) {
    return observer.subscribe(onNext, onError, onComplete);
  }

  /**
   * Worker message event callback.
   * @param  {object} event .
   */
  function _Next(event) {
    observer.next(event.data);
  }

  /**
   * Worker error event callback.
   * @param {object} event .
   */
  function _Error(event) {
    observer.error(event.data);
  }
}
