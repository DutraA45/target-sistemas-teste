// 2 - Verificador e contador de letras 'a' em uma string

function verificarString() {
    const string = document.getElementById("input").value;
    let letrasA = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
            letrasA++;
        }
    }

    if (letrasA === 0) {
        document.getElementById("verificacao").innerHTML = `A letra 'a' não pertence a string "${string}".`;
    } else {
        document.getElementById("verificacao").innerHTML = `A letra 'a' pertence a string "${string}" e aparece ${letrasA} vez(es).`;
    }

}