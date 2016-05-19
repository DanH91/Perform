import {expect} from 'chai';
import {initialize} from '../src/core/index';

describe('initialize()', () => {
  it('should return true when worker feature is supported', () => {
    expect(initialize()).to.be.equal(true);
  });
});
