import './styles.css'
import {ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo className="logo-image"/>
            <Link to="/" className="logo-text">Fatec DevDay 2021</Link>
        </nav>
    )
}

export default Navbar;