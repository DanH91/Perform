import {expect} from 'chai';
import sinon from 'sinon';
import spawn from '../src/core/spawn';

describe('spawn()', () => {
  describe('subscribe()', () => {
    it('should should subscribe callback function to worker message event',
       done => {
         let task = spawn('/base/worker_scripts/simple_worker.js');
         let spy = sinon.spy();
         task.subscribe(spy);
         window.setTimeout(() => {
           expect(spy.called).to.equal(true);
           done();
         }, 500);
       });
    it('should exec onError callback when worker throw error',
       done => {
         let task = spawn('/base/worker_scripts/error_worker.js');
         let onError = sinon.spy();
         task.subscribe(() => {}, onError);
         window.setTimeout(() => {
           expect(onError.called).to.equal(true);
           done();
         }, 500);
       });
  });
  describe('stop()', () => {
    it('should exec onComplete callback when worker is closed',
       done => {
         let task = spawn('/base/worker_scripts/counter_worker.js');
         let onComplete = sinon.spy();
         task.subscribe(() => {}, () => {}, onComplete);
         task.stop();
         window.setTimeout(() => {
           expect(onComplete.called).to.equal(true);
           done();
         }, 500);
       });
  });
});
