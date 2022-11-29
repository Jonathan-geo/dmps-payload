/**
 * Botão Submit
 */
document.getElementById("btnSubmit").onclick = function(e) {
    e.preventDefault()

    let questions = document.getElementById("forms");
    document.getElementById("resultado").innerHTML = '&nbsp;';
    
    var resultados = [];
    

    for (var i = 0; i < questions.length; i++) {
        if (questions[i].checked) {
            var temp = new Object();
            temp["Question"] = questions[i].name;
            temp["Resp"] = questions[i].value;
            resultados.push(temp);
        }
    }
    


    var correto = 0;
    var errado = 0;

    for (var i = 0; i < resultados.length; i++) {
        /*
        var node = '<p>' + resultados[i].Question + ' = ' + resultados[i].Resp + '</p>';
        document.getElementById("resultado").innerHTML += node;
        */
         
        if(resultados[i].Resp == 'Correto') {
            correto++
        }else{
            errado++
        }

    }

    let el = document.querySelectorAll(".correto");
    for (var i = 0, j = el.length; i < j; i++) {
        el[i].style['background-color'] = '#83f2a1';
    }


    grafico1(correto, errado);
    

    

    //LIMPANDO VARIAVEIS

    var resultados = [];

    
    return false;

};



document.getElementById("limparCampos").onclick = function() {

    let questions = document.getElementById("forms");

    for (var j = 0; j < questions.length; j++) {
        if (questions[j].checked) {
            questions[j].checked = false;
        }
    }

    let el = document.querySelectorAll(".correto");
    for (var i = 0, j = el.length; i < j; i++) {
        el[i].style['background-color'] = '#FFFFFF';
    }


    return false;
};


















function grafico1(acerto, erros){
    //LIMPAR O CANVAS ANTES DE PLOTAR O GRÁFICO
    var pieChartContent = document.getElementById('pieChartContent2');
    pieChartContent.innerHTML = '&nbsp;';
    pieChartContentnew = '<canvas id="graficoResultado" width="80" height="50"></canvas>';
    document.getElementById("pieChartContent2").innerHTML = pieChartContentnew

    var totalgeral = document.getElementById('graficoResultado').getContext('2d');
    var grafico01 = new Chart(totalgeral, {
        type: 'bar',
        data: {
            labels: ['Acertos', 'Erros'],
            datasets: [
            {
                backgroundColor: ["#00994f", "#ff6666"],
                data: [acerto,erros]
            }
            ]
        },
        options: {
            legend: { display: false },
            /*
            title: {
                display: true,
                text: 'Cotas de Fundos de Investimento'
            },
            */
            scales: {
            yAxes: [{
                ticks: {
                    max: 10,
                    min: 0,
                    stepSize: 1
                }
            }]
            }
        }
    });
}






















/**
function reset_msg() {
    document.getElementById('resultado').innerHTML = '';
}


document.getElementById("btnLoad").onclick = function() {
    var radios = document.getElementsByName("band-rock");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === "led-zeppelin") {
            radios[i].checked = true;
        }
    }
};
 */




