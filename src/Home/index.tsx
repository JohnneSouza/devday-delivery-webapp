import './styles.css';
import { ReactComponent as DeliveryImage } from './delivery-man.svg'
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<div className="home-container">
				<div className="home-content">
					<div className="home-actions">
						<h1 className="home-title">
							Faça o seu pedido <br />
						e deixe o resto <br />
						com a gente!
					</h1>
						<h3 className="home-subtitle">
							Precisa de algo? Procure em nosso aplicativo <br />
						e nós entregaremos para você rapidinho.
					</h3>
						<Link to="/orders" className="home-btn-order">
							NAVEGAR AGORA
					</Link>
					</div>
					<div className="home-image">
						<DeliveryImage />
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Home;