
self.postMessage('pong');

/** */
function triggerError() {
  throw new Error("trigger error!");
}
triggerError();
