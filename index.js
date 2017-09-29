function produceDrivingRange(range) {
	return function(starPoint, endPoint){

		let distance = Math.abs( parseInt(starPoint) - parseInt(endPoint) )
		if ( distance > range ){
			let outOfRange = Math.abs(range - distance);
			return `${outOfRange} blocks out of range`
		}	else {
			let withinRange = Math.abs (range - distance);
			return `within range by ${withinRange}`
		}
	}
};

function produceTipCalculator(tip){
	return function(fare){
		return tip * fare
	}
}

function createDriver() {
	let driverId = 0

	return class {
		constructor(name){
			this.name = name
			this.id = ++driverId
		}
	}
}