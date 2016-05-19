import {expect} from 'chai';
import sinon from 'sinon';
import {spawn} from '../src/core/spawn';

describe('spawn()', () => {
  let script = function() {
    /** */
    function timedMessage() {
      self.postMessage("Echo");
    }
    timedMessage();
  };
  it('should spawn a new worker from worker script file giving a path',
     done => {
       let task = spawn('/base/worker_scripts/simple_worker.js');
       task.subscribe(response => {
         expect(response).to.equal('pong');
         done();
       });
     });
  it('should spawn a new worker from worker script function',
     done => {
       let task = spawn(script);
       task.subscribe(response => {
         expect(response).to.equal("Echo");
         done();
       });
     });
  it('should spawn a new worker from worker script function with dependencies',
     done => {
       /**
	* @param {string} message .
	* @return {string} echo
	*/
       function greet(message) {
         return 'Hello! ' + message;
       }
       let scriptWithDep = function() {
         self.onmessage = function(data) {
           self.postMessage(greet(data.data));
         };
       };
       let task = spawn([greet, scriptWithDep]);
       let spy = sinon.spy();
       task.subscribe(spy);
       task.dispatch('Daniel');
       task.subscribe(() => {
         expect(spy.called).to.equal(true);
         done();
       });
     });
  describe('subscribe()', () => {
    it('should subscribe callback function to worker message event',
       done => {
         let task = spawn('/base/worker_scripts/simple_worker.js');
         task.subscribe(response => {
           expect(response).to.equal('pong');
           done();
         });
       });
    it('should exec onError callback when worker throw error',
       done => {
         let task = spawn('/base/worker_scripts/error_worker.js');
         task.subscribe(() => {}, error => {
           expect(error.message).to.equal('Uncaught Error: error message!');
           done();
         });
       });
  });
  describe('stop()', () => {
    it('should exec onComplete callback when task is disposed',
       done => {
         let task = spawn('/base/worker_scripts/counter_worker.js');
         task.subscribe(() => {}, () => {}, () => {
           done();
         });
         task.dispose();
       });
  });
  describe('observe()', () => {
    it('should expose observable for source filtering customization',
       done => {
         let task = spawn('/base/worker_scripts/counter_worker.js');
         let filter = count => count % 2 === 0;
         let list = [];
         let source = task.observe().filter(filter);
         source.subscribe(list.push);
         window.setTimeout(() => {
           expect(list.filter(filter)).to.eql(list);
           task.dispose();
           done();
         }, 60);
       });
  });
  describe('dispatch()', () => {
    let echoScript = function() {
      self.onmessage = function(data) {
        self.postMessage(data.data);
      };
    };
    it('should send message data to worker',
       done => {
         let task = spawn(echoScript);
         let obj = {
           name: 'name', list: [1, 2, 4], count: 5, meth: function() {}
         };
         task.subscribe(response => {
           expect(response).to.equal(JSON.stringify(obj));
           task.dispose();
           done();
         });
         task.dispatch(obj);
       });
  });
});
