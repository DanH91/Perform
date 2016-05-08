import {expect} from 'chai';
import sinon from 'sinon';
import _ from 'lodash-fp';
import Core from '../src/core/index';

describe('Core', () => {
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
    it('should spawn a new worker', function(done) {
      let thread = Core.spawn('/base/test/worker_script.js');
      let spy = sinon.spy();
      thread.map(spy);
      window.setTimeout(function() {
        expect(spy.called).to.equal(true);
        done();
      }, 500);
    });
  });
});
