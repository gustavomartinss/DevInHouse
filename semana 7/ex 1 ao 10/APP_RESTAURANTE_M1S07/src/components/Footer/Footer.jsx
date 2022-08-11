import './footer.css'

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="info">
                    <div className="infos-1">
                        <p>Rua Alto da Roseira, 736, Vila Torres Galvão</p>
                        <p>Paulista/PE</p>
                    </div>
                    <div className='logo-invert'><ion-icon size="large" name="restaurant"></ion-icon></div>
                    <div className='logo-invert'><ion-icon size="large" name="restaurant"></ion-icon></div>
                    <div className='logo-invert'><ion-icon size="large" name="restaurant"></ion-icon></div>
                    <div className="infos-2">
                        <p><strong>Fone:</strong> (81) 2750-2643</p>
                        <p><strong>Horário de Funcionamento:</strong> 11:00 às 15 hrs</p>
                        <p><strong>Instragram:</strong> @m1s07_ristorante</p>
                    </div>
                </div>
                <div className="copy">
                    <small>© 2022 M1S07 RISTORANTE - Todos os direitos reservados</small>
                    <small>Desenvolvido por <a href="">Gustavo Martins</a></small>
                </div>

            </footer>
        </>
    )
}