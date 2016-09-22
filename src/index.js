var calQuadratic = function(a, b, c, callback) {
	if(isNaN(a) || isNaN(b) || isNaN(c)) {
		var error = new Error('parameter should have number value');
		return callback(error);
	}
	else {
		if(a == 0) {
			if(b == 0 && !isNaN(c)) {
				var error = new Error('function donot have result');
				return callback(error);
			} else {
				var result = -c/b;
				callback(null, result);
			}
		} else {
			var delta = b*b - 4*a*c;
			if(delta < 0) {
				var error = new Error('function donot have result');
				return callback(error);
			} else if(delta == 0) {
				var result = -b/(2*a);
				callback(null, result);
			} else {
				var sqrtDelta = Math.sqrt(delta);
				var x1 = (-b + sqrtDelta)/(2*a);
				var x2 = (-b - sqrtDelta)/(2*a);
				callback(null, x1,x2);
			}
		}
	}
};
module.exports = {
	calQuadratic : calQuadratic
}