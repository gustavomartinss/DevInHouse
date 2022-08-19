import { RenderizaCard } from "../RenderizaCard/RenderizaCard";

import './subsec.css'

export const SubSecao = ({ produtos, subSec }) => {

    const produtosFiltrados = produtos.filter((prod) => prod.subCategoria === subSec);

    return (
        <div className="sub-secao">

            <div>
                <h3>{subSec}</h3>
                <hr className="separador-sub" />
            </div>

            <RenderizaCard produtos={produtosFiltrados} />

        </div>
    )
}