var Board = require('./board.js');
var Player = require('./player.js');
const XSign = 'x';
const OSign = 'o';

exports.initialize = function () {
	return new Room();
}

var Room = function (_name, _username, _socket) {
	var name, username, socket;
	var players = new Array();
	var guests = new Array();
	var board = new Board();
	var sign = { o: true; x: false };
	var owner = new Player(_username, _socket, oSign, true);
	var turn = _username;
	var status = 'waiting';
	players[_username] = owner;

	name = name;
	username = username;
	socket = socket;

	this.addPlayer = function (_username, _socket) {
		if (sign.x == false && status == 'waiting') {
			player = new Player(_username, _socket, xSign, false);
			players[_username] = player;
			status = 'ready';
		} else {
			player = new Player(_username, _socket, undefined, false);
			guests[_username] = player;
		}
	}

	this.getOtherPlayer = function (_username) {
		var result;

		players.forEach(function (p) {
			if (p.getName() != _username) {
				result = p;
			}
		});

		return result;
	}

	this.getGuests = function () {

		return guests;
	}

	this.checkTurn = function (_username) {
		var result = false;
		if (turn == _username) {
			result = true;
		}

		return result;
	}

	this.setTurn = function (_username) {
		turn = _username;
	}

	this.getStatus = fucntion () {

		return status;
	}

	this.start = function () {
		if (sign.x == true and sign.o = true && status == 'ready') {
			status = 'playing';

			return true;
		} else {

			return false;
		}
	}
}