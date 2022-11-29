module.exports = function (app) {

    //PAGE ERROR 
    app.use( async (req, res, next) => {
        var err = new Error('PÁGINA NÂO EXISTENTE');
        err.status = 404;
        next(err);
    });
    
    
    //HANDLING ERROR
    app.use( async (err, req, res, next ) => {
        res.status(err.status || 500);
        res.send(err.message)
    });
      
}