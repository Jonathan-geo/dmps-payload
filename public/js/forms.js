const validadeField = (field, message) => {

    if(!field.value && field.value.trim() == "" ){
        alert(message)
        return false
    }

        return true
}



const validadeHistorico = (form) => {
    return validadeField(form.nome, "Preencha o nome") && 
        validadeField(form.data, "Preencha a data") &&
        validadeField(form.acerto, "Preencha o acerto") &&
        validadeField(form.erro, "Preencha o erro")
}
