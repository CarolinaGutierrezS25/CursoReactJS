import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import { BrowserRouter , Route , Switch } from 'react-router-dom'
import ItemDetailContainer from "./Components/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/cart";
const App = () => {
    return(
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" component={ItemListContainer} exact/>
                    <Route path="/category/:id" component={ItemListContainer} />
                    <Route path="/item/:id" component={ItemDetailContainer} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App