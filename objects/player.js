var Player = function (_name, _socket, _sign, _owner) {
	var self = this;
	var name, sign, socket, owner;

	name = _name;
	sign = _sign;
	socket = _socket;
	owner = _owner;

	this.getSocket = function () {

		return socket;
	}

	this.setSocket = function (_socket) {
		socket = _socket;

		return self;
	}

	this.getName = function () {

		return name;
	}

	this.getSign = function () {

		return sign;
	}

	this.setSign = function (_sign) {
		sign = _sign;

		return self;
	}

	this.getOwner = function () {
		
		return owner;
	}
}

module.exports = Player;