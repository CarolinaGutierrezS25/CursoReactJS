import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <header className="header-mark">
            <div className="cont-title">
                <div className="logo-title-content">
                    <img src="/img/wolf_white.png" alt="Logo" className="img-main-logo"/>
                    <h1 className="main-title">
                        Wolfmark
                    </h1>
                </div>
                <div className="main-buttons-content">
                    <div className="dropdown">
                        <button className="dropbtn">Categorias<span className="material-icons">expand_more</span></button>
                        <div className="dropdown-content">
                            <Link to="/">
                                <span>Todas</span>
                            </Link>
                            <Link to="/category/Casual">
                                <span>Casual</span>
                            </Link> 
                            <Link to="/category/Formal">
                                <span>Formal</span>
                            </Link>    
                        </div>
                    </div>
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}

export default NavBar