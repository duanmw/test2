var WebSocketServer = require('ws').Server;//npm i ws
//指定8181端口
wss = new WebSocketServer({ port: 8181 });

wss.on('open', function open() {
   console.log('server:localhost:8181');
});


wss.on('connection', function (ws) {
    console.log('client connected');

	var num={}
	setInterval(function () {
	    num.a = Math.floor(Math.random()*10)
	    ws.send(JSON.stringify(num));
	}, 2000);//定时发送数据
    
    ws.on('message', function (message) {
        console.log("收到的消息："+message);//将收到的消息log出来
    });
});
