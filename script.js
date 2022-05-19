function codificarCesar() {
    var texto = document.getElementById('mensagem').value.toUpperCase()
    var incremento = parseInt(document.getElementById('row').value)
    var tableAscii = []
    var final = []


    //Trnasforma tudo em núemros tabela ascii
    for (let i = 0; i < texto.length; i++) {
        tableAscii[i] = texto.charCodeAt(i)
    }
    for (let i = 0; i < texto.length; i++) {
        if (tableAscii[i] + incremento > 90) {
            tableAscii[i] = 65 + (tableAscii[i] - 90)
        } else {
            tableAscii[i] = tableAscii[i] + incremento
        }
    }
    // retornado como caractere
    for (let i = 0; i < texto.length; i++) {
        final[i] = String.fromCodePoint(tableAscii[i]);
    }
    return final.toString().replace(/,/g, "");
}

function codificarBase64() {
    var texto = document.getElementById('mensagem').value
    var final = btoa(texto);

    return final;
}

function codificar() {
    var codigo = document.querySelector('input[name=codigo]:checked').value
    var resultado;

    if (codigo == "Cesar") {
        resultado = codificarCesar();
    }

    if (codigo == "64") {
        resultado = codificarBase64();
    }

    document.getElementById("retorno").value = resultado;
}

function decodificarCesar() {
    var texto = document.getElementById('mensagem').value.toUpperCase()
    var incremento = parseInt(document.getElementById('row').value)
    var tableAscii = []
    var final = []


    //Trnasforma tudo em núemros tabela ascii
    for (let i = 0; i < texto.length; i++) {
        tableAscii[i] = texto.charCodeAt(i)
    }

    for (let i = 0; i < texto.length; i++) {
        if (tableAscii[i] - incremento < 65) {

            tableAscii[i] = 91 - (65 - (tableAscii[i] - incremento))
            console.log(tableAscii[i])
        } else {
            tableAscii[i] = tableAscii[i] - incremento
        }
    }
    // retornado como caractere
    for (let i = 0; i < texto.length; i++) {
        final[i] = String.fromCodePoint(tableAscii[i]);
    }
    return final.toString().replace(/,/g, "");
}

function decodificarBase64() {
    var texto = document.getElementById('mensagem').value
    var final = atob(texto);

    return final;
}

function decodificar() {
    var codigo = document.querySelector('input[name=codigo]:checked').value
    var resultado;

    if (codigo == "Cesar") {
        resultado = decodificarCesar();
    }

    if (codigo == "64") {
        resultado = decodificarBase64();
    }

    document.getElementById("retorno").value = resultado;
}



function aparece() {
    var campo = document.getElementById('row')
    campo.style.visibility = "visible"
}

function desaparece() {
    var campo = document.getElementById('row')
    campo.style.visibility = "hidden"
}