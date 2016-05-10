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
