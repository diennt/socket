var Square = function (_x, _y, _sign) {
	var x, y, sign;
	x = _x;
	y = _y;
	sign = _sign;

	this.getX = function () {
		return x;
	}

	this.getY = function () {
		return y;
	}

	this.setSign = function (_sign) {
		value = _sign;
	}

	this.getSign = function () {
		return value;
	}
}

module.exports = Square;