
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
      state.subscribers.map(subscriber => subscriber.onComplete());
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
     * @return {object} Returns subscription token.
     */
    subscribe(onNext, onError = () => {}, onComplete = () => {}) {
      let index = state.subscribers.length;
      state.subscribers.push({onNext, onError, onComplete});
      return {
	/**
	 * Dispose subscription
	 */
        dispose() {
          state.subscribers = state.subscribers.filter((s, i) => i !== index);
        }
      };
    }
  };
}
