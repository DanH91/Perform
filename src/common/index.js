
/**
 * Dispatch interface ('typeclass').
 * @param  {object} state - task holder state.
 * @return {object} interface .
 */
export function canDispatch(state) {
  return {
    /**
     * Dispatch data to worker.
     * @param  {*} data - message content.
     */
    dispatch(data) {
      state.w.postMessage(JSON.stringify(data));
    }
  };
}

/**
 * Disposable interface ('typeclass').
 * @param  {object} state - task holder state.
 * @return {object} interface - disposable functions.
 */
export function disposable(state) {
  return {
    /**
     * Terminate worker and complete subject.
     */
    dispose() {
      state.w.terminate();
      state.subject.onCompleted();
    }
  };
}

/**
 * Observable interface ('typeclass').
 * @param  {object} state - task holder state.
 * @return {object} interface - disposable functions.
 */
export function observable(state) {
  return {
    /**
     * Map over stream of worker event data.
     * @param  {function} onNext - on next value callback.
     * @param  {function} onError - on error value callback.
     * @param  {function} onComplete - on complete value callback.
     * @return {object} token - subscription token.
     */
    subscribe(onNext, onError, onComplete) {
      return state.subject.subscribe(onNext, onError, onComplete);
    },
    /**
     * expose observable subject.
     * @return {object} subject
     */
    observe() {
      return state.subject;
    }
  };
}
