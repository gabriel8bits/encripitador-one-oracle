const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


//Encriptar a mensagem

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgrounImage="none";
   // aparece();
}

function encriptar(stringEncriptada) {
    let matrizCodico = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodico.length; i++) {
        if(stringEncriptada.includes(matrizCodico[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodico[i][0], matrizCodico[i][1]);
        }
    }

    return stringEncriptada;
}


//Desencriptar a mensagem

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgrounImage="none";
    
    console.log("clicou");
}

function desencriptar(stringDesencriptada) {
    let matrizCodico = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodico.length; i++) {
        if(stringDesencriptada.includes(matrizCodico[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodico[i][1], matrizCodico[i][0]);
        }
    }

    return stringDesencriptada
}

/*function aparece() {
    document.getElementById("div-aparece").style.display = 'block';
}*/