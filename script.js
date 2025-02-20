const display = document.getElementById("display");

//função para adicionar ao display
function adicionarAoDisplay(valor) {
    display.value += valor;
}

//função para resetar o display
function limparDisplay() {
    display.value = "";
}

//função para apagar/del o último número
function deletarUltimo() {
    display.value = display.value.slice(0, -1);
}

//funções para cálculos
function calcularResultado() {
    let resultado = display.value;

    try {
        //soma
        if (resultado.includes('+')) {
            let [num1, num2] = resultado.split('+');
            resultado = parseFloat(num1) + parseFloat(num2);
        }
        //subtração
        else if (resultado.includes('-')) {
            let [num1, num2] = resultado.split('-');
            resultado = parseFloat(num1) - parseFloat(num2);
        }

         // Multiplicação
        else if (resultado.includes('*')) {
            let [num1, num2] = resultado.split('*');
            resultado = parseFloat(num1) * parseFloat(num2);
        }

        // Divisão
        else if (resultado.includes('/')) {
            let [num1, num2] = resultado.split('/');
            resultado = parseFloat(num1) / parseFloat(num2);
        }

        display.value = resultado;

    } catch (error) {
        display.value = "Erro";
    }
}

//função para utilizar teclas do teclado

document.addEventListener("keydown", function(event) {
    const tecla = event.key;
    
 // Se a tecla for um número ou operador válido, adicionar ao display
    if ("0123456789/*-+.()".includes(tecla)) {
        adicionarAoDisplay(tecla);
    }

    // Se a tecla for "Enter", calcula o resultado
    if (tecla === "Enter") {
        calcularResultado();
    }

    // Se a tecla for "Backspace", deleta o último caractere
    if (tecla === "Backspace") {
        deletarUltimo();
    }
    // Se a tecla for "Escape", limpa o display
    if (tecla === "Escape") {
        limparDisplay();
    }}
);
