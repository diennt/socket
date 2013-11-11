var Square = require('./square.js');

var Board = function (_maxX, _maxY) {
	var self = this;
	var squares = [];
	var moves = [];
	var maxX = (_maxX == undefined) ? 30 : _maxX;
	var maxY = (_maxY == undefined) ? 20 : _maxY;
	var lastMove = { i: -1, j: -1, sign: undefined };

	for (var i = 0; i < maxX; i ++) {
		squares[i] = [];
		for (var j = 0; j < maxY; j++) {
			squares[i][j] = new Square(i, j);
		}
	}

	this.getMoves = function () {

		return moves;
	}

	this.setMove = function (i, j, sign) {
		squares[i][j].setSign(sign);
		lastMove = { i: i, j: j, sign: sign };
		moves.push({ i: i, j: j, sign: sign });
	}

	this.getLastMove = function () {
		return lastMove;
	}

	this.getWinner = function () {
		var sign = x;

		return sign;
	}

	this.reset = function () {
		for (var i = 0; i < maxX; i++) {
			for (var j = 0; j < maxY; j++) {
				squares[i][j].setSign(undefined);
			}
		}

		lastMove = { i: -1, j: -1};
	}
}

module.exports = Board;