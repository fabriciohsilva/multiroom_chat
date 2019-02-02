module.exports = function(application){

    application.get('/', function (req, res){
        application.app.controllers.index.home(application, req, res);
    });//end application.get('/', function (req, res)

}//end module.exports = function(application)