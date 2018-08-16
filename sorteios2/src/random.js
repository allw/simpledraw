(function(){
  generate = function (quantity) {
  	alert('in');
  	let min = 1;
  	let result = [];
  	for(var i = 0; i < quantity; i++) {
  		let random = Math.floor(Math.random() * (quantity - min + 1) ) + min;
  		//if(result.indexOf(random) === -1) {
  			result.push(random);
  		//}
  	}
  	alert('done');
  	return result;
  }

  test = function() {
  	alert('test');
  }

  return {
  	generate: generate,
  	test: test
  }
})();