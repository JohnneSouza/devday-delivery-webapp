import './styles.scss'
import {ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo className="logo-image"/>
            <Link to="/" className="logo-text">Home</Link>
            <Link to="/orders" className="logo-text">Comprar</Link>
            <Link to="/products" className="logo-text">Produtos</Link>
            <Link to="/purchase" className="logo-text">Pedidos</Link>
        </nav>
    )
}

export default Navbar;