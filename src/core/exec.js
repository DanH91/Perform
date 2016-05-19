import {spawn} from './spawn';

/**
 * @param {function} executable - function to execute
 * @param {Array} params - arguments to pass to the function
 * @param {function[]} dependencies - functions required for the execution
 * @return {Object} job - observable job.
 */
export function exec(executable, params = [], dependencies = []) {
  let bundle = dependencies.concat(['self.run = ', executable, function() {
    self.onmessage = function(event) {
      self.postMessage(
	self.run.apply(null, JSON.parse(event.data))
      );
      self.close();
    };
  }]);
  let job = spawn(bundle);
  job.dispatch(params);
  return job;
}
