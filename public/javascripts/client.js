console.log("wtf????");

var socket = io.connect("/");

socket.on("connect_res", function (data) {
	console.log(data);
});

$(function () {
	socket.emit("connect_req", {});
});