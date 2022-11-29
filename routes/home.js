const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const axios = require('axios');
const https = require('https');



require('../models/Pontuacao');
const Pontuacao = mongoose.model("pontuacaos")


const {eAuth} = require('../helpers/eAuth');



router.get('/', (req, res)=>{
    res.render("index")
});


//SQL FAKE
var listProduct = [
    {
        cnpj: '18495846574',
        Faturamento_Cliente: 60000.00,
        SISBACEN_Divida: 30000.00,
        SISBACEM_Segmento: 'Alimentar',
        Status_Cadastro_Martins: 'Grave',
        Score_Rating_Grupo: 'H',
        Classificacao_PMG: 'P',
        Cliente_Prospect: 'true',
        Dias_Constituicao_Estabelecimento: '20/01/2021'
        
    },
    {
        cnpj: '23495846574',
        Faturamento_Cliente: 230000.00,
        SISBACEN_Divida: 10000.00,
        SISBACEM_Segmento: 'Eletro',
        Status_Cadastro_Martins: 'Null',
        Score_Rating_Grupo: 'C',
        Classificacao_PMG: 'G',
        Cliente_Prospect: 'false',
        Dias_Constituicao_Estabelecimento: '18/03/2019'
        
    },
    {
        cnpj: '34495846574',
        Faturamento_Cliente: 330000.00,
        SISBACEN_Divida: 100000.00,
        SISBACEM_Segmento: 'Moveis',
        Status_Cadastro_Martins: 'Gravissimo',
        Score_Rating_Grupo: 'PR',
        Classificacao_PMG: 'M',
        Cliente_Prospect: 'false',
        Dias_Constituicao_Estabelecimento: '10/10/2018'
        
    },
    {
        cnpj: '44495846574',
        Faturamento_Cliente: 1330000.00,
        SISBACEN_Divida: 60000.00,
        SISBACEM_Segmento: 'Agro',
        Status_Cadastro_Martins: 'null',
        Score_Rating_Grupo: 'null',
        Classificacao_PMG: 'M',
        Cliente_Prospect: 'true',
        Dias_Constituicao_Estabelecimento: '20/01/2021'
        
    },
    {
        cnpj: '54495846574',
        Faturamento_Cliente: 30000.00,
        SISBACEN_Divida: 0,
        SISBACEM_Segmento: 'Matcon',
        Status_Cadastro_Martins: 'null',
        Score_Rating_Grupo: 'null',
        Classificacao_PMG: 'P',
        Cliente_Prospect: 'true',
        Dias_Constituicao_Estabelecimento: '20/01/2021'
        
    }
];

var correntId = 2;




router.get('/clientes', function(req, res){
    res.send({products:listProduct});
});


function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

router.get('/sleep20', function(req, res){
    sleep(20000).then(() => {
        res.send({"success":"true", "sleep":20});
    });
});

router.get('/sleep40', function(req, res){
    sleep(40000).then(() => {
        res.send({"success":"true", "sleep":40});
    });
});

router.get('/sleep60', function(req, res){
    sleep(60000).then(() => {
        res.send({"success":"true", "sleep":60});
    });
});

router.get('/clientes/:cnpj', function(req, res){
    var cnpj = req.params.cnpj;
    var found = false;
    var listProductSelect;
    listProduct.forEach(function(product, index){
        if (!found && product.cnpj == cnpj){
            listProductSelect = {
                    cnpj: product.cnpj,
                    Faturamento_Cliente: product.Faturamento_Cliente,
                    SISBACEN_Divida: product.SISBACEN_Divida,
                    SISBACEM_Segmento: product.SISBACEM_Segmento,
                    Status_Cadastro_Martins: product.Status_Cadastro_Martins,
                    Score_Rating_Grupo: product.Score_Rating_Grupo,
                    Classificacao_PMG: product.Classificacao_PMG,
                    Cliente_Prospect: product.Cliente_Prospect,
                    Dias_Constituicao_Estabelecimento: product.Dias_Constituicao_Estabelecimento
            }
        }   
    });
    res.send({product:listProductSelect});
});


router.post('/clientes', function(req, res){
    //let cnpj = req.body.cnpj;

    correntId++;
    
    listProduct.push({
        id: correntId,
        nome: nome,
        data: data,
        renda: renda,
        idade: idade,
        profissao: profissao,
        estadoCivil: estadoCivil
    });
    res.send('Cliente inserido com sucesso!');
});















var dmpsPayloadData = [
    {
        id: 1,
        bodyPayload: "bodyPayload0001"
    }
];

correntIdcout = 1

router.post('/dmps/payload', function(req, res){
    let bodyPayloadDataApi = req.body;
    //console.log(bodyPayloadDataApi);
    correntIdcout++;
    
    dmpsPayloadData.push({
        id: correntIdcout,
        bodyPayload: bodyPayloadDataApi
    });
    res.send('Cliente inserido com sucesso!');
});

router.get('/dmps/payload', function(req, res){
    var listbodyPayload;
    dmpsPayloadData.forEach(function(product, index){
        listbodyPayload = {
            id: product.id,
            bodyPayload: product.bodyPayload
        }
    });
    res.send({data:dmpsPayloadData});
});

router.get('/dmps/payload/clean', function(req, res){
    dmpsPayloadData = [
        {
            id: 1,
            bodyPayload: "bodyPayload0001"
        }
    ];
    res.send({data:dmpsPayloadData});
});





function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


var apiSyncMode = [
    {
        id: 1,
        bodyPayload: "API_SYNC_MODE"
    }
];

correntIdcout = 1


router.post('/dmps/apisync', function(req, res){
    let dateNowA = new Date()
    
    let bodysyncApi = req.body;
    //console.log(bodysyncApi);
    correntIdcout++;
    
    apiSyncMode.push({
        id: correntIdcout,
        bodyPayload: bodysyncApi
    });

    sleep(27000).then(() => {
        let dateNowb = new Date()
        res.send(dateNowA+'----'+dateNowb);
    });

    
});

router.get('/dmps/apisync', function(req, res){
    var listbodyPayload;
    apiSyncMode.forEach(function(product, index){
        listbodyPayload = {
            id: product.id,
            bodyPayload: product.bodyPayload
        }
    });
    res.send({data:apiSyncMode});
});

router.get('/dmps/apisync/clean', function(req, res){
    apiSyncMode = [
        {
            id: 1,
            bodyPayload: "API_SYNC_MODE"
        }
    ];
    res.send({data:apiSyncMode});
});














































/*



var Connection = require('tedious').Connection;

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
var connection = new Connection(config); 


connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
    console.log("Connected");  
    //executeStatement();  
});  

connection.connect();

var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  


var request = new Request("SELECT * FROM GPropostas;", function (err, rowCount, rows) {

    if (err) {
        console.log(err);
    } else {
        console.log(rowCount + ' rows');
    }
    console.log(rows) // this is the full array of row objects
    // it just needs some manipulating

    jsonArray = []
    rows.forEach(function (columns) {
        var rowObject ={};
        columns.forEach(function(column) {
            rowObject[column.metadata.colName] = column.value;
        });
        jsonArray.push(rowObject)
    });

    return callback(null, rowCount, jsonArray);
    
});

console.log(request.jsonArray)


*/






/*
function executeStatement() {  
    request = new Request("SELECT * FROM GPropostas;", function(err) {  
        if (err) {  
            console.log(err);
        }  
    });


    var result = "";  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value + " ";  
          }  
        });  
        console.log(result);  
        result ="";  
    });  

    console.log(request);

    request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    connection.execSql(request);  
}  
*/


/*npm install express4-tedious --save
router.get('/dmps/analistas', function (req, res) {     
    req.sql("SELECT * FROM GPropostas").into(res);
});
*/



/*
var db = require('../config/dbTedious.js');
var TYPES = require('tedious').TYPES;

router.get('/dmps/analistas', function (req, res) {
    db.stream("SELECT * FROM GPropostas", db.createConnection(), res, '[]');
});
*/













































router.post('/trbk', function(req, res){
    
    let cnpj = req.body.cnpj;

    const dmipUrl='https://ec2-34-223-59-55.us-west-2.compute.amazonaws.com:8443/dmip-gw/dmip/request/in-trbk/response/out-trbk';
    const dmipHeaders = {
        'dmip-tenant-id': '1',
        'dmip-application-name': 'TRBK',
        'dmip-token': '59c4507f-e5cb-4d05-8cbf-e80b07127ac8',
        'Content-Type': 'application/vnd.fico.dmip.v3.0+text'
    }
    axios({
        method: 'put',
        url: dmipUrl,
        data: cnpj,
        config: { headers: dmipHeaders},
        /*
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
        */
    })
    .then((response) => {
        console.log(response.data);
        req.flash("success_msg", "Requisição elaborada")
        res.redirect("/");
    })
    .catch((error) => {
        console.log(error);
        req.flash("error_msg", "Erro de requisição")
        res.redirect("/");
    })
    //54495846574
    //res.send({product:listProductSelect});
    
});



  //axios.put(url, cnpj, {headers: headers})



router.post('/pontuacao', eAuth, (req, res)=>{

    
    let errosList = [];
    /*
    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        errosList.push({texto: "Nome inválido"})
    }

    if(req.body.nome.length < 2 && req.body.nome.length > 0){
        errosList.push({texto: "O nome precisa ter mais de 2 caracteres"})
    }
    */

    if(errosList.length > 0){
        res.render("admin/addcategorias", {erros: errosList})
    }else{

        const novaPontuacao = {
            nome: req.body.nome,
            data: req.body.data,
            renda: req.body.renda,
            idade: req.body.idade,
            profissao: req.body.profissao,
            estadoCivil: req.body.estadoCivil
        }
    
        //console.log(novaPontuacao);
        
        new Pontuacao(novaPontuacao).save()
            .then(()=>{
                req.flash("success_msg", "Pontuação inserida com Sucesso!")
                res.redirect("/")
            })
            .catch((err)=>{
                req.flash("error_msg", "Houve um erro ao salvar a sua pontuação, tente novamente!")
                res.redirect("/")
            })


    }

})























router.post('/pontuacao', eAuth, (req, res)=>{

    let errosList = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        errosList.push({texto: "Nome inválido"})
    }

    if(req.body.nome.length < 2 && req.body.nome.length > 0){
        errosList.push({texto: "O nome precisa ter mais de 2 caracteres"})
    }

    if(errosList.length > 0){
        res.render("admin/addcategorias", {erros: errosList})
    }else{

        const novaPontuacao = {
            nome: req.body.nome,
            data: req.body.data,
            simulado: req.body.simulado,
            acerto: req.body.acerto,
            erro: req.body.erro
        }
    
        //console.log(novaPontuacao);
        
        new Pontuacao(novaPontuacao).save()
            .then(()=>{
                req.flash("success_msg", "Pontuação inserida com Sucesso!")
                res.redirect("/")
            })
            .catch((err)=>{
                req.flash("error_msg", "Houve um erro ao salvar a sua pontuação, tente novamente!")
                res.redirect("/")
            })


    }

})


module.exports = router;
