let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let path = require('path');

app.get('/', function(req, res){
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});


http.listen(3001, function(){
    console.log('listening on *:3001');
});