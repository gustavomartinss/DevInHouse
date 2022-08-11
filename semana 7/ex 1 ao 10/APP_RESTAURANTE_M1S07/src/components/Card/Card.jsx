import './card.css'

import PropTypes from 'prop-types';

export const Card = ({ produto: {nome, imagem, descricao, preco, tempo} }) => {

    return (
        <div className="card-container">
            <div className="card-header">
                <h3>{nome}</h3>
            </div>
            <div className="card-main">
                <div className="imagem-card">
                    <img src={imagem} alt="" />
                </div>
                <div className="desc-card">
                    <p>{descricao}</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="valor-card">
                <ion-icon name="pricetag-outline"></ion-icon>
                <p>{`R$ ${preco}`}</p>
                </div>
                <div className="tempo-card">
                <ion-icon name="timer-outline"></ion-icon>
                <p>{`${tempo} minutos`}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    produto: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        imagem: PropTypes.string.isRequired,
        descricao: PropTypes.string,
        preco: PropTypes.number.isRequired,
        tempo: PropTypes.number
    })
}