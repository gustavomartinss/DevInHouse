var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
];

var ulIndex =  document.getElementById("ulNova");

const listaCompleta = listaConvidados.forEach((nome, index)=> {
    console.log(nome.nome + " " + nome.sobrenome);
    var item = document.createElement("li");
    var convidado = listaConvidados[index].nome + " " + listaConvidados[index].sobrenome;
    item.textContent = convidado;
    ulIndex.appendChild(item);
})