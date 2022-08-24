const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


//Encriptar a mensagem

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgrounImage="none";
   // aparece();

    console.log("clicou")
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

/*function aparece() {
    document.getElementById("div-aparece").style.display = 'block';
}*/