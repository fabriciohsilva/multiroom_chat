module.exports = function(application){
    
    application.post('/chat', function (req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });//end application.post('/chat', function (req, res)

    application.get('/chat', function (req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });//end application.get('/chat', function (req, res)
    
}//end module.exports = function(application)