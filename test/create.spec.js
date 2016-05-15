import {expect} from 'chai';
import create, {createTransferrable} from '../src/core/create';

describe('create()', () => {
  let script = function() {
    /** */
    function timedMessage() {
      self.postMessage("Echo");
    }
    timedMessage();
  };
  it('should create a worker giving a script path', () => {
    let worker = create('/base/worker_scripts/simple_worker.js');
    expect(worker instanceof window.Worker).to.equal(true);
  });
  it('should create a worker giving a script', () => {
    let worker = create(script);
    expect(worker instanceof window.Worker).to.equal(true);
  });

  describe('createTransferrable()', () => {
    it('should create an ObjectURL giving a script', () => {
      let transferable = createTransferrable(script);
      expect(transferable).to.be.a('string');
    });
  });
});
