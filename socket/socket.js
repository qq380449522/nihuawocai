var secketio = require('socket.io');
module.exports = function(server){
    var io = secketio(server);
    io.on('connection', function (client) {
        client.on('start',data=>{
            io.emit('moveto',data);
        })
        client.on('move',data=>{
            io.emit('lineto',data);
        })
    });
}


