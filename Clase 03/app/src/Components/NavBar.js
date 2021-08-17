const NavBar = () => {
    return (
        <header className="header-mark">
            <div className="cont-title">
                <div className="logo-title-content">
                    <img src="img/wolf_comp_white.png" alt="Logo" className="img-main-logo"/>
                    <h1 className="main-title">
                        Wolfmark
                    </h1>
                </div>
            </div>
            <div className="main-buttons-content">
                <nav>
                    <a className="nav-link" href="#">Favoritos</a>
                    <a className="nav-link" href="#">Usuario</a>
                </nav>
            </div>
        </header>
    )
}

export default NavBar