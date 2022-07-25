let contasClientes = [
    {
        id: 1,
        nome: 'Gustavo Martins',
        saldo: 37,
    },
    {
        id: 2,
        nome: 'al Kaleed',
        saldo: 2000000,
    },
    {
        id: 3,
        nome: 'Maria Joaquina',
        saldo: 2449,
    },
    {
        id: 4,
        nome: 'João Silva',
        saldo: 1000,
    },
    {
        id: 5,
        nome: 'Ronaldo Nazario',
        saldo: 7000,
    }
];

let selectClientes = document.getElementById("selectClientes");

const populaSelect = () => {
    contasClientes.forEach(option => 
        selectClientes.add(new Option(option.id))
        )
    
}

window.onload = populaSelect;


const saque = (conta, quantia) => {
    if (conta.saldo <= 0) {
        alert(`Valor inválido!`);
        return;
    }

    if (quantia > conta.saldo) {
        alert(`Saldo Insuficiente. Saldo atual de R$ ${conta.saldo}.`);
        return;
    }

    alert(`Saque realizado com sucesso!`)
    conta.saldo -= quantia;
    alert(`Seu novo saldo é de R$ ${conta.saldo}.`)
    return (contasClientes[conta] = conta);
}

const deposito = (conta, quantia) => {
    if (quantia <= 0) {
        alert(`Valor inválido!`);
        return;
    }
    
    alert(`Depósito realizado com sucesso!`)
    conta.saldo += quantia;
    alert(`Seu novo saldo é de R$ ${conta.saldo}.`)
    return (contasClientes[conta] = conta);
}

const operacao = (tipoOperacao, conta, quantia) => {
    if (tipoOperacao === "depositar") {
        return deposito(conta, quantia);
    }

    if (tipoOperacao === "sacar") {
        return saque(conta, quantia);
    }

    return `Operação inválida.`;
}

const formDeTrabalho = document.getElementById("trab");

formDeTrabalho.addEventListener('submit', (event) => {
    event.preventDefault();

    const contaSelecionada = document.getElementById("selectClientes").value;
    const valorInformado = document.getElementById("valor").value;
    const tipoOperacao = document.querySelector('input[name="operacao"]:checked').value;
    const conta = contasClientes.find(
        (conta) => conta.id === Number(contaSelecionada)
    )

        console.log(conta);
        console.log(contaSelecionada);
        console.log(valorInformado);

    const quantia = Number(valorInformado);

    operacao(tipoOperacao, conta, quantia)

    formDeTrabalho.reset()

    console.log(contasClientes);


 
});




