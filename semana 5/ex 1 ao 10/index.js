import { saudacao } from "./saudacao.js";
import { saudaEspecial } from "./saudacaoEspecial.js";

saudacao();
saudaEspecial("Gustavo");


class Produto {
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor(nome, preco, emEstoque, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}

class Pedido {
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;

    constructor(numeroPedido, nomeCliente) {
        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = (new Date().toLocaleDateString)
        this.estaPago = false;
        this.listaProdutos = [];
    }

    adicionarProduto(produto) {

        const ehProduto = produto instanceof Produto;

        if (ehProduto) {
            this.listaProdutos.push(produto);
        }
    }

    calcularTotal() {
        let total = this.listaProdutos.reduce((ant, atu) => {
            return ant + atu.preco * atu.quantidade;
        }, 0)
        
        return total;
    }
}

const produto1 = new Produto('iPhone 12', 4800, true, 2);
const produto2 = new Produto('Moto G', 1500, true, 4);
const produto3 = new Produto('Acer Nitro 5', 4300, true, 5);
const produto4 = new Produto('JBL Xtreme 2', 2300, true, 1);
const produto5 = new Produto('MacBook Air 2020', 7300, true, 2);

const cliente1 = new Pedido(20220001, 'Gustavo Martins');
const cliente2 = new Pedido(20220002, 'Morgana Alves');

cliente1.adicionarProduto(produto1);
cliente1.adicionarProduto(produto3);
cliente1.adicionarProduto(produto5);

cliente2.adicionarProduto(produto2);
cliente2.adicionarProduto(produto4);

console.log(cliente1.calcularTotal());

console.log(cliente2.calcularTotal());