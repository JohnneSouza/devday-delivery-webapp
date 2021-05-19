import './styles.css'
import {ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo className="logo-image"/>
            <Link to="/" className="logo-text">Home</Link>
            <Link to="/products" className="logo-text">Produtos</Link>
            <Link to="/purchase" className="logo-text">Pedidos</Link>
        </nav>
    )
}

export default Navbar;