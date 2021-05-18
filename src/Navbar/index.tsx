import './styles.css'
import {ReactComponent as Logo} from './logo.svg';

function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo className="logo-image"/>
            <a className="logo-text" href="logo">Fatec DevDay 2021</a>
        </nav>
    )
}

export default Navbar;