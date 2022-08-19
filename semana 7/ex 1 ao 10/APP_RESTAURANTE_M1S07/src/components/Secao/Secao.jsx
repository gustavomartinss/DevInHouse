import "./secao.css";

// import produtos from '../../services/produtos.json';

// import { Card } from "../Card/Card";
import { RenderizaCard } from "../RenderizaCard/RenderizaCard";
import { SubSecao } from "../SubSecao/SubSecao";

export const Secao = ({ nome, produtos, subSec }) => {

    // console.log(subSec);

  return (
    <section className="sec">
        <div className="title">
            <h2>{nome.toUpperCase()}</h2>
            <hr className="separador" />
        </div>

        {subSec?.length > 0 ? (
            subSec.map((sub, index) => <SubSecao key={index} produtos={produtos} subSec={sub} />)
        ) : (<RenderizaCard produtos={produtos} />) }

    </section>
  );
};
