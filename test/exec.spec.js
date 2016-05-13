import {expect} from 'chai';
import {exec} from '../src/core/exec';

describe('exec()', () => {
  it('should execute passed function on arguments', done => {
    let add = (a, b) => {
      return a + b;
    };
    let job = exec(add, [2, 2]);
    job.subscribe(response => {
      expect(response).to.equal(4);
      done();
    });
  });
  it('should execute passed function and it dependencies on arguments',
     done => {
       let add = (a, b) => a + b;
       let increment = i => add(i, 1);
       let job = exec(increment, [10], [add]);
       job.subscribe(response => {
         expect(response).to.equal(11);
         done();
       });
     });
});
