import "./card.css";

import PropTypes from "prop-types";

// import produtos from '../../services/produtos.json';

export const Card = ({ produto }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <h4>{produto.nome}</h4>
      </div>
      <div className="card-main">
        <div className="imagem-card">
          <img src={produto.imagem} alt="" />
        </div>
        <div className="desc-card">
          <p>{produto.descricao}</p>
        </div>
      </div>
      <div className="card-footer">
        <div className="valor-card">
          <ion-icon name="pricetag-outline"></ion-icon>
          <p>{`R$ ${produto.preco}`}</p>
        </div>
        <div className="tempo-card">
          <ion-icon name="timer-outline"></ion-icon>
          <p>{`${produto.tempo} minutos`}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  produto: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    descricao: PropTypes.string,
    preco: PropTypes.number.isRequired,
    tempo: PropTypes.number,
  }),
};
