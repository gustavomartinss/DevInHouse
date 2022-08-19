import { Card } from "../Card/Card";

import './RenderizaCard.css'

export const RenderizaCard = ({ produtos }) => (
  <ul>
    {produtos.map((produto) => (
      <li className="items-lista" key={produto.id}>
        <Card produto={produto} />
      </li>
    ))}
  </ul>
);
