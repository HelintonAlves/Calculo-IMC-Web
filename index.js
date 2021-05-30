function calcularIMC(){
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var imc = (peso / (altura * altura)).toFixed(1);
    var imcResultado = "";

    if((altura === 0) && (peso === 0)){
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("descricaoResultado").innerHTML = "";
        alert("Favor preencher a sua altura e seu peso!");
        altura === 0;
        peso === 0;

    }else if((altura === 0) || (altura === "")){
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("descricaoResultado").innerHTML = "";
        alert("Favor preencher a sua altura!");
        altura === 0;
        peso === 0;
    }else if((peso === 0) || (peso === "")){
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("descricaoResultado").innerHTML = "";
        alert("Favor preencher o seu peso!");
        altura === 0;
        peso === 0;
    }else if((altura > 0) && (peso > 0)){
        if(imc < 18.5){
            imcResultado = "Abaixo do normal! Procure seu médico."
        }else if((imc >= 18.5) && (imc < 25)){
            imcResultado = "Está normal. Parabéns! Mantenha seu IMC nesta faixa para ter uma vida saudável."
        }else if((imc >= 25) && (imc < 30)){
            imcResultado = "Atenção você está com sobrepeso. Procure seu médico!"
        }else if((imc >= 30) && (imc < 45)){
            imcResultado = "Você está com obesidade! Atenção, procure seu médico."
        }else{
            imcResultado = "Obesidade grave! Procure seu médico para um tratamento."
        }

        document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc;
        document.getElementById("descricaoResultado").innerHTML = imcResultado;
    }   
    
}

function limpar(){
    document.getElementById("altura").value = 0;
    document.getElementById("peso").value = 0;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("descricaoResultado").innerHTML = "";
}

function validarCampos(){

    console.log(document.getElementById("altura").value);
    console.log(document.getElementById("peso").value);
    
  
}