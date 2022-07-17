window.alert("Vamos executar operações matemáticas!")

let n1 = window.prompt("Digite o primeiro número da operação:")
let n2 = window.prompt("Digite o primeiro número da operação:")

const operacao = window.prompt("Isira a operação desejada: ' + ' para Adição, ' - ' para Subtração, ' * ' para Multiplicação, ' / ' para Divisão. ")

switch (operacao) {
    case "+":
        console.log("Resultado é: " + (parseInt(n1) + parseInt(n2)));
        break;
    case "-":
        console.log("Resultado é: " + (parseInt(n1) - parseInt(n2)));
        break;
    case "*":
        console.log("Resultado é: " + (parseInt(n1) * parseInt(n2)));
        break;
    case "/":
        console.log("Resultado é: " + (parseInt(n1) / parseInt(n2)));
        break;

    default:
        console.log("Digite valores válidos!");
        break;
}