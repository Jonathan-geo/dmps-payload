module.exports = {
    
    //BLOQUEIA QUALQUER PESSOA NÂO LOGADA
    eAuth: (req, res, next) => {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash("error_msg", "Por favor, faça seu login!")
        res.redirect("/admin/login")
    }
    
    /*
    //BLOQUEIA PESSOA QUE NÂO É ADMIN
    eAuth: (req, res, next) => {
        if(req.isAuthenticated() && req.user.eAuth == 1){
            return next();
        }
        req.flash("error_msg", "Voce deve estar logado como admin para entrar na Área do Admin!")
        res.redirect("/usuarios/login")
    }
    */

}