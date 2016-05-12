
self.postMessage('pong');

/** */
function triggerError() {
  throw new Error("error message!");
}
triggerError();
