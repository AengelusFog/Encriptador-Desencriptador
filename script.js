/** Función para encriptar el texto **/
function encrypt() {
    var inputText = document.getElementById("text-input").value.toLowerCase(); /* Convertimos el texto a minúsculas */
    inputText = removeAccents(inputText); /* Eliminamos los acentos */
    var outputText = ""; /* Variable para almacenar el texto encriptado */

    /* Recorremos el texto de entrada */
    for (var i = 0; i < inputText.length; i++) {
        var currentChar = inputText[i];

        /* Verificamos cada letra y la encriptamos según las reglas */
        switch (currentChar) {
            case "e":
                outputText += "enter";
                break;
            case "i":
                outputText += "imes";
                break;
            case "a":
                outputText += "ai";
                break;
            case "o":
                outputText += "ober";
                break;
            case "u":
                outputText += "ufat";
                break;
            default:
                outputText += currentChar;
        }
    }

    document.getElementById("result-text").value = outputText; /* Mostramos el texto encriptado */
}

/** Función para desencriptar el texto **/
function decrypt() {
    var inputText = document.getElementById("result-text").value.toLowerCase(); /* Convertimos el texto a minúsculas */
    var outputText = ""; /* Variable para almacenar el texto desencriptado */

    /* Recorremos el texto de entrada */
    for (var i = 0; i < inputText.length; i++) {
        var currentChar = inputText[i];

        /* Verificamos cada palabra encriptada y la desencriptamos */
        switch (currentChar) {
            case "e":
                if (inputText.startsWith("enter", i)) {
                    outputText += "e";
                    i += 4; /* Saltamos a la siguiente letra después de "enter" */
                } else {
                    outputText += currentChar;
                }
                break;
            case "i":
                if (inputText.startsWith("imes", i)) {
                    outputText += "i";
                    i += 4; /* Saltamos a la siguiente letra después de "imes" */
                } else {
                    outputText += currentChar;
                }
                break;
            case "a":
                if (inputText.startsWith("ai", i)) {
                    outputText += "a";
                    i += 1; /* Saltamos a la siguiente letra después de "ai" */
                } else {
                    outputText += currentChar;
                }
                break;
            case "o":
                if (inputText.startsWith("ober", i)) {
                    outputText += "o";
                    i += 3; /* Saltamos a la siguiente letra después de "ober" */
                } else {
                    outputText += currentChar;
                }
                break;
            case "u":
                if (inputText.startsWith("ufat", i)) {
                    outputText += "u";
                    i += 3; /* Saltamos a la siguiente letra después de "ufat" */
                } else {
                    outputText += currentChar;
                }
                break;
            default:
                outputText += currentChar;
        }
    }

    document.getElementById("result-text").value = outputText; /* Mostramos el texto desencriptado */
}

/** Función para copiar el texto encriptado/desencriptado al portapapeles **/
function copyToClipboard() {
    var copyText = document.getElementById("result-text");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

}

/** Función para eliminar los acentos de las vocales **/
function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/** Asignación de eventos a los botones **/
document.getElementById("encrypt-btn").addEventListener("click", encrypt);
document.getElementById("decrypt-btn").addEventListener("click", decrypt);
document.getElementById("copy-btn").addEventListener("click", copyToClipboard);