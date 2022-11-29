const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');


const session = require('express-session');
const flash = require('connect-flash');

const home = require('./routes/home');
const admin = require('./routes/admin');
const simulados = require('./routes/simulados');



const db = require('./config/db');
















const passport = require("passport");
require("./config/auth")(passport);

const app = express();

//---CONFIGURAÇÂO SESSION----//
app.use(session({
  secret: "sessionkey",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize())
app.use(passport.session())


app.use(flash());

//---MIDDLEWERE SESSION----//
app.use((req, res, next)=>{
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
})


/*
//var express = require('express');
var tediousExpress = require('express4-tedious');
//var app = express();
var connection = { 

  server: 'novamesadecreditotribanco.database.windows.net',  //update me
  authentication: {
      type: 'default',
      options: {
          userName: 'TridmW567Jis', //update me
          password: 'Threebanco123%'  //update me
      }
  },
  options: {
      // If you are on Microsoft Azure, you need encryption:
      encrypt: true,
      database: 'NovaMesaDeCreditoTribanco'  //update me
  }

};

app.use(function (req, res, next) {    
  req.sql = tediousExpress(connection);    
  next();
});
*/












app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({
  limit: '50mb', extended: true
}));


//const path = require('path');
//const diretorio = path.join(__dirname);

//---CONFIGURAÇÂO PASTA-PUBLIC----//
app.use(express.static(__dirname+'/public'));


//---CONFIGURAÇÂO HANDLEBARS----//
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');


//---CONFIGURAÇÂO MONGOOSE-MONGODB----//
mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=>{
        console.log("MongoDB Conectado...")
    }).catch((err) =>{
        console.log("Houve um erro ao se conectar ao mongoDB: " + err)
    })



//---CONFIGURAÇÂO ROTAS----//
app.use('/admin', admin)
app.use('/simulados', simulados)
app.use('/', home)












app.get('/dmps/admin', function (req, res) {
   
  var sql = require("mssql");
  // Configuration object for your database
  var config = {
    server: 'novamesadecreditotribanco.database.windows.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'TridmW567Jis', //update me
            password: 'Threebanco123%'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'NovaMesaDeCreditoTribanco'  //update me
    }
  };
  // connect to the database
  sql.connect(config, function (err) {
  
      if (err) console.log(err);
      // create Request object
      var request = new sql.Request();
         
      // query to the database and get the records
      request.query('SELECT * FROM GPropostas;', function (err, recordset) {
          
          if (err) console.log(err)
          // send records as a response
          res.send(recordset);
          
      });
  });
});




















const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Az-project listening on ${port}`);

