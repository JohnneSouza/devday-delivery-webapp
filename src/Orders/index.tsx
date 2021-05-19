import { toast } from 'react-toastify';
import { useEffect, useState } from 'react'
import Footer from '../Footer';
import { fetchProducts, saveOrder } from './api';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList'
import StepHeaders from './StepHeaders'
import './styles.css'
import { Product } from './types';

function Orders() {
	const [products, setProducts] = useState<Product[]>([]);
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
	const totalPrice = selectedProducts.reduce((sum, item) => {
		return sum + item.price
	}, 0)

	useEffect(() => {
		fetchProducts()
			.then(response => setProducts(response.data))
			.catch(error => console.log(error))
	}, [])

	const handleSelectProduct = (product: Product) => {
		const isAlreadySelected = checkIsSelected(selectedProducts, product)
	
		if (isAlreadySelected) {
			const selected = selectedProducts.filter(item => item.id !== product.id);
			setSelectedProducts(selected);
		} else {
			setSelectedProducts(previous => [...previous, product]);
		}
	}

	const handleSubmit = () => {
		const productsIds = selectedProducts.map(({ id }) => ({ id }));
		const payload = {
			products: productsIds
		}
	
		saveOrder(payload).then((response) => {
			if (payload.products.length === 0) {
				toast.dark('Que tal selecionar ao menos 1 produto? 😅');
			} else {
			toast.error('Pedido enviado com sucesso!');
			toast(`Pedido Nº ${response.data.id}`);
			setSelectedProducts([]);
			}
		})
			.catch(() => {
				toast.warning('Erro ao enviar pedido');
			})
	}
	

	return (
		<>
			<div className="orders-container">
				<StepHeaders />
				<ProductsList
					products={products}
					onSelectProduct={handleSelectProduct}
					selectedProducts={selectedProducts}
				 />
				{/* <OrderLocation /> */}
				<OrderSummary
				amount={selectedProducts.length}
				totalPrice={totalPrice}
				onSubmit={handleSubmit}
				 />
			</div>
			<Footer />

		</>
	)
}

export default Orders;