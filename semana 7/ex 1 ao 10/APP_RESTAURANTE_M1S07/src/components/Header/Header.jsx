import './header.css'

export const Header = () => {
    return (
        <>
            <header>
                <div className="logo-title">
                    <ion-icon size="large" name="restaurant-outline"></ion-icon>
                    <h1>M1S07 RISTORANTE</h1>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="">Cardápio</a></li>
                    </ul>
                </div>
                
            </header>
        </>
    )
}