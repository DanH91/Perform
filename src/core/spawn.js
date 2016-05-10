import Rx from 'rxjs';
import create from './create';

/**
  * Spawn a dedicated worker.
  * @param  {(string|function)} script - worker script.
  * @return {object} worker wrapper  -  worker wrapper object.
  */
export default function spawn(script) {
  let w = create(script);
  let subject = new Rx.Subject();
  w.onmessage = _Next;
  w.onerror = _Error;
  let ctx = {
    dispatch,
    stop,
    subscribe
  };
  return ctx;

  /**
   * Dispatch data to worker.
   * @param  {*} data - message content.
   */
  function dispatch(data) {
    w.postMessage(JSON.stringify(data));
  }

  /**
   * Terminate worker and complete subject.
   */
  function stop() {
    w.terminate();
    subject.complete();
  }

  /**
   * Map over stream of worker event data.
   * @param  {function} onNext - on next value callback.
   * @param  {function} onError - on error value callback.
   * @param  {function} onComplete - on complete value callback.
   * @return {object} token - subscription token.
   */
  function subscribe(onNext, onError, onComplete) {
    return subject.subscribe(onNext, onError, onComplete);
  }

  /**
   * Worker message event callback.
   * @param  {object} event .
   */
  function _Next(event) {
    subject.next(event.data);
  }

  /**
   * Worker error event callback.
   * @param {object} event .
   */
  function _Error(event) {
    subject.error(new Error(event.message));
  }
}
