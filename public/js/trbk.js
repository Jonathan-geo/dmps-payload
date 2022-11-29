//const axios = require('axios');




$(document).ready(function() {

    console.log('ok');

    document.getElementById("trbksubmit").onclick = function(e) {
        e.preventDefault();
        var campos = [
            document.querySelector('#cnpj')
        ]
    
        var resultado = "Valor do cnpj campos=[]: " + campos[0].value;
        console.log(resultado);

        const dmipUrl='https://ec2-34-223-59-55.us-west-2.compute.amazonaws.com:8443/dmip-gw/dmip/request/in-trbk/response/out-trbk';
        /*
        const dmipHeaders = {
            'dmip-tenant-id': '1',
            'dmip-application-name': 'TRBK',
            'dmip-token': '59c4507f-e5cb-4d05-8cbf-e80b07127ac8',
            'Content-Type': 'application/vnd.fico.dmip.v3.0+text'
        }
        */

        $.ajax({
            method: 'PUT',
            url: dmipUrl,
            headers: {
                'dmip-tenant-id': '1',
                'dmip-application-name': 'TRBK',
                'dmip-token': '59c4507f-e5cb-4d05-8cbf-e80b07127ac8',
                'Content-Type': 'application/vnd.fico.dmip.v3.0+text'
            },
            data: campos[0],
            success: function(response){
                console.log(response);
                console.log("OK");
            },
            error: function(error){
                console.log(error);
                console.log("Erro");
            }
        });

    
    };


})






