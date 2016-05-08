import {expect} from 'chai';
import sinon from 'sinon';
import _ from 'lodash-fp';
import Core from '../src/core/index';

describe('initialize()', () => {
  it('should return true when worker feature is supported', () => {
    expect(Core.initialize()).to.be.equal(true);
  });
  it('should return false when worker feature is not supported', () => {
    sinon.stub(_, "isFunction", () => false);
    expect(Core.initialize()).to.be.equal(false);
  });
});

describe('spawn()', () => {
  describe('subscribe()', () => {
    it('should should subscribe callback function to worker message event',
       done => {
         let thread = Core.spawn('/base/worker_scripts/simple_worker.js');
         let spy = sinon.spy();
         thread.subscribe(spy);
         window.setTimeout(() => {
           expect(spy.called).to.equal(true);
           done();
         }, 500);
       });
    it('should exec onError callback when worker throw error',
       done => {
         let thread = Core.spawn('/base/worker_scripts/error_worker.js');
         let onError = sinon.spy();
         thread.subscribe(() => {}, onError);
         window.setTimeout(() => {
           expect(onError.called).to.equal(true);
           done();
         }, 500);
       });
  });
  describe('stop()', () => {
    it('should exec onComplete callback when worker is closed',
       done => {
         let thread = Core.spawn('/base/worker_scripts/counter_worker.js');
         let onComplete = sinon.spy();
         thread.subscribe(() => {}, () => {}, onComplete);
         thread.stop();
         window.setTimeout(() => {
           expect(onComplete.called).to.equal(true);
           done();
         }, 500);
       });
  });
});
