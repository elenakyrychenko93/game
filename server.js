const express = require('express');
const app = express();
const router = express.Router();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const morgan = require('morgan');
const PORT = 4000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res){
    res.sendFile('index.html', { root: path.join(__dirname, 'build') });
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});


http.listen(PORT, function(){
    console.log(`listening on *:${PORT}`);
});