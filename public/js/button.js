$(document).ready(function() {

    var divButton = $('#buttonDivfunction');

    divButton.append(
        `<button type="button"  id="btnSubmit" class="btn btn-primary" data-toggle="modal" data-target="#modal-id">
            FINALIZAR TESTE
        </button>

        <button type="button"  id="limparCampos" class="btn btn-primary" >
            LIMPAR CAMPOS
        </button>

        <hr>

        <!-- Modal -->
        <div class="modal fade" id="modal-id" tabindex="-1" role="dialog" aria-labelledby="id-modal-label" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="id-modal-label">RESULTADO</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>



                    <div class="modal-body">
                        <div id="resultado"></div>
                        <div class="card border-dark mb-3 ml-3" style="max-width: 22rem;">
                            
                            <div class="card-header">TOTAL DE ACERTOS</div>

                            <div id ="pieChartContent2" class="card-body">
                                <canvas 
                                    id="graficoResultado" 
                                    width="80" 
                                    height="50">
                                </canvas>
                            </div>
                        </div>
                    </div>



                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`
    );

});