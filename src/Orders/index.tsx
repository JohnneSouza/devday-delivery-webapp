import { useEffect, useState } from 'react'
import Footer from '../Footer';
import { fetchProducts } from './api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList'
import StepHeaders from './StepHeaders'
import './styles.css'
import { Product } from './types';

function Orders() {
	const [products, setProducts] = useState<Product[]>([]);
	console.log(products)
	useEffect(() => {
		fetchProducts()
			.then(response => setProducts(response.data))
			.catch(error => console.log(error))
	}, [])

	return (
		<>
			<div className="orders-container">
				<StepHeaders />
				<ProductsList products={products} />
				{/* <OrderLocation /> */}
				<OrderSummary />
			</div>
			<Footer />

		</>
	)
}

export default Orders;