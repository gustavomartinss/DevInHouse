const convidados = [
    {
        nome: 'Gustavo',
        sobrenome: 'Martins',
        setor: 'camarote',
        idade: 24
    },
    {
        nome: 'João',
        sobrenome: 'Silva',
        setor: 'camarote',
        idade: 28
    },
    {
        nome: 'Maria',
        sobrenome: 'Joaquina',
        setor: 'arquibancada',
        idade: 16
    },
    {
        nome: 'Vanessa',
        sobrenome: 'Pontes',
        setor: 'arquibancada',
        idade: 21
    },
    {
        nome: 'Gabriel',
        sobrenome: 'Bastos',
        setor: 'pista',
        idade: 20
    },
    {
        nome: 'Benicio',
        sobrenome: 'Monte',
        setor: 'pista',
        idade: 17
    }
]

function liberarBebidas (array) {

    var novaLista = [];
    
    array.forEach((idade, i) => {
        novaLista.push(array[i])
        if (array[i].idade >= 18) {
            novaLista[i].openBar = true;
            novaLista[i].sobrenome = novaLista[i].sobrenome + " 🍺"
        } else{
            novaLista[i].openBar = false;
            novaLista[i].sobrenome = novaLista[i].sobrenome + " 🔞"
        }
    })
    
    return novaLista
}

let convidadosBebidas = liberarBebidas(convidados)
console.log(convidadosBebidas);


function separarCamarote(array) {
    var listaFiltrada = array.filter((objeto) => objeto.setor === "camarote");
      return listaFiltrada;
}

let listaCamarote = separarCamarote(convidadosBebidas);
console.log(listaCamarote);

function separarArquibancada(array) {
    var listaFiltrada = array.filter((objeto) => objeto.setor === "arquibancada");
      return listaFiltrada;
}

let listaArquibancada = separarArquibancada(convidadosBebidas);
console.log(listaArquibancada);

function separarPista(array) {
    var listaFiltrada = array.filter((objeto) => objeto.setor === "pista");
      return listaFiltrada;
}

let listaPista = separarPista(convidadosBebidas);
console.log(listaPista);

const ulCamarote = document.getElementById("listaCamarote");
const ulArquibancada = document.getElementById("listaArquibancada");
const ulPista = document.getElementById("listaPista");

const exibeListaCamarote = listaCamarote.forEach((convidado, i) => {
            let item = document.createElement("li");
            let pessoa = listaCamarote[i].nome + " " + listaCamarote[i].sobrenome;
            item.textContent = pessoa;
            ulCamarote.appendChild(item);
});

const exibeListaArquibancada = listaArquibancada.forEach((convidado, i) => {
    let item = document.createElement("li");
    let pessoa = listaArquibancada[i].nome + " " + listaArquibancada[i].sobrenome;
    item.textContent = pessoa;
    ulArquibancada.appendChild(item);
});

const exibeListaPista = listaPista.forEach((convidado, i) => {
    let item = document.createElement("li");
    let pessoa = listaPista[i].nome + " " + listaPista[i].sobrenome;
    item.textContent = pessoa;
    ulPista.appendChild(item);
});