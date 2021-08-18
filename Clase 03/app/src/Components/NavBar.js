import CartWidget from "./CartWidget"
const NavBar = () => {
    return (
        <header className="header-mark">
            <div className="cont-title">
                <div className="logo-title-content">
                    <img src="img/wolf_white.png" alt="Logo" className="img-main-logo"/>
                    <h1 className="main-title">
                        Wolfmark
                    </h1>
                </div>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar