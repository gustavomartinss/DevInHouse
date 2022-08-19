import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Secao } from "./components/Secao/Secao";
import produtos from "./services/produtos.json";

function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subCategoria));

  return (
    <>
      <Header />
      <Secao nome={"entradas"} produtos={produtos.entradas} subSec={Array.from(subSecoesEntradas)} />
      <Secao nome={"pratos principais"} produtos={produtos.pratosPrincipais} />
      <Secao nome={"bebidas"} produtos={produtos.bebidas} />
      <Footer />
    </>
  );
}

export default App;
