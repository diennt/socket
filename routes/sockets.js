var io = require('socket.io');
var Board = require('../objects/board.js');

var clients = [];
var boards = [];

exports.initialize = function (server) {
	io = io.listen(server);

	io.set("authentication", function (data, accept) {

	});

	io.sockets.on("connection", function (socket) {
		
	});
}