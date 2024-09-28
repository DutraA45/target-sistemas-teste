// 1 - Fibonnaci

function verificarFibonacci() {
    const num = parseInt(document.getElementById("inputNum").value);
    let a = 0, b = 1; 
    let sequencia = []; 
    
    // Gera a sequência de Fibonacci até que o número seja encontrado ou ultrapassado
    while (a <= num) {
        sequencia.push(a); 
        const temp = a; 
        a = b; 
        b = temp + b; 
    }

    // Verifica se o número pertence à sequência
    const pertence = sequencia.includes(num); // O número pertence se estiver na sequência
    let resultadoTexto;

    if (pertence) {
        resultadoTexto = num + " pertence à sequência de Fibonacci.";
    } else {
        resultadoTexto = num + " não pertence à sequência de Fibonacci.";
    }

    // Mostra o resultado
    document.getElementById("resultado").innerText = resultadoTexto;

    // Mostra a sequência gerada
    document.getElementById("sequencia").innerText = 
        "Sequência de Fibonacci até " + num + ": " + sequencia.join(", ") + ".";
}