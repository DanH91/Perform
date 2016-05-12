import Rx from 'rxjs';
import create from './create';
import {disposable, observable, canDispatch} from '../common/index';

/**
  * Spawn a dedicated worker.
  * @param  {(string|[function])} script - worker script.
  * @return {object} worker wrapper  -  worker wrapper object.
 */
export function spawn(script) {
  let state = {
    w: create(script),
    subject: new Rx.Subject()
  };

  state.w.onmessage = _Next;
  state.w.onerror = _Error;

  let ctx = Object.assign(
    {},
    disposable(state),
    observable(state),
    canDispatch(state)
  );
  return ctx;

  /**
   * Worker message event callback.
   * @param  {object} event .
   */
  function _Next(event) {
    state.subject.next(event.data);
  }

  /**
   * Worker error event callback.
   * @param {object} event .
   */
  function _Error(event) {
    state.subject.error(new Error(event.message));
  }
}
