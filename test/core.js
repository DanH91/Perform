import { expect, assert } from 'chai';
import Core from '../src/core/index';

describe('Core', ()=>{

    it('should return true when worker feature is supported', ()=>{
	expect(Core.Initialize()).to.be.equal(true);
    });
    
});
