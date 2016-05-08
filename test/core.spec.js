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
         let thread = Core.spawn('/base/test/worker_script.js');
         let spy = sinon.spy();
         thread.subscribe(spy);
         window.setTimeout(() => {
           expect(spy.called).to.equal(true);
           done();
         }, 500);
       });
  });
});
