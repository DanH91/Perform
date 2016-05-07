import { expect, assert } from 'chai';
import sinon from 'sinon';
import Core from '../src/core/index';

describe('Core', ()=>{

    it('should return true when worker feature is supported', ()=>{
	expect(Core.Initialize()).to.be.equal(true);
    });

    //timeout failure is expected if the function don't work properly
    it('should create (initialize) a new worker', function(done){
	let thread = Core.create('/base/test/worker_script.js'),
	    spy = sinon.spy();
	thread.subscribe(spy);
	
	setTimeout(function(){
	    expect(spy.called).to.equal(true);
	    done();
	}, 500);
    });
    
});
