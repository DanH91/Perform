import _ from 'lodash-fp';

export default (()=>{
    return {
	Initialize,
	create
    };
})();

function create(script){
    let w = new window.Worker(script);
    return {
	subscribe(callback){
	    w.onmessage = callback;
	}
    };
}

function Initialize(){
    return _.isFunction(window.Worker);
}
