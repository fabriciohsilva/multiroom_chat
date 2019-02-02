//importar as configurações do servidor
var application = require('./config/server');

//parametrizar a porta de escuta
var server = application.listen(3000, function(){
    console.log("Server running on port 3000...");
});


var io = require('socket.io').listen(server);

application.set('io', io);

//criar instancia do websocket
io.on('connection', function(socket){

    socket.on('disconnect', function(){        
    });

    socket.on('msgParaServidor', function(data){
        //dialogos
        socket.emit(
            'msgParaCliente'
        ,   {   apelido: data.apelido
            ,   mensagem: data.mensagem});

        socket.broadcast.emit(
            'msgParaCliente'
        ,   {   apelido: data.apelido
            ,   mensagem: data.mensagem});

        
        //participantes
        if(parseInt(data.apelido_atualizado) == 0){
            
            socket.emit(
                'participanteParaCliente'
            ,   {   apelido: data.apelido });

            socket.broadcast.emit(
                'participanteParaCliente'
            ,   {   apelido: data.apelido });

        }//end if(apelido_atualizado == 0)


    });//end socket.on('msgParaServidor', function(data)

});