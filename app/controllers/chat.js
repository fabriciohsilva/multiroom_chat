module.exports.iniciaChat = function(application, req, res){
    
    var dadosForm = req.body;

    req.assert('apelido', 'O Apelido é obrigatório').notEmpty();
    req.assert('apelido', 'O Apelido deve ter entre 3 e 15 caracteres').len(3,15);

    var erros = req.validationErrors();

    if(erros){
        res.render('index', {validacao : erros});
        return;
    }//end if(erros)

    application.get('io').emit(
        'msgParaCliente'
    ,   {   apelido: dadosForm.apelido
        ,   mensagem: ' acabou de se conectar no chat!'
    });

    res.render('chat', {dadosForm: dadosForm });

}//end module.exports.iniciaChat