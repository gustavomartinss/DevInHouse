import { Fragment, useState } from 'react'
import './App.css'
import { Card } from './components/Card/Card'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {

  const produtos = [
    {id: 1, nome: 'Coca-Cola', imagem: '', descricao: 'Lata, contendo de 350ml', preco: 8, tempo: 0},
    {id: 2, nome: 'Coca-Cola', imagem: '', descricao: 'Lata, contendo de 350ml', preco: 8, tempo: 0},
    {id: 3, nome: 'Coca-Cola', imagem: '', descricao: 'Lata, contendo de 350ml', preco: 8, tempo: 0}
  ]

  return (
    <>
      <Header />
      <ul>
        {produtos.map((produto) => {
          return (
            <Card key={produto.id} 
              produto={produto}
            />
          )
        })}
      </ul>
      <Footer />
    </>
  )
}

export default App
