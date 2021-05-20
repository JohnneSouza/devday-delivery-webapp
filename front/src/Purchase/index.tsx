import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { deleteOrder, fetchOrders } from '../Orders/api';

import './styles.css'
import PurchaseList from './PurchaseList';
import { Purchase } from '../Orders/types';
import PurchaseHeader from './PurchaseHeader';
import Footer from '../Footer';
import PurchaseSummary from './PurchaseSummary';

function PurchaseOrder() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const totalPrice = purchases.reduce((sum, item) => {
    return sum + item.total
  }, 0)

  useEffect(() => {
    fetchOrders()
      .then(response => setPurchases(response.data))
      .catch(error => {
        toast.dark("Ops! Algo deu errado! Não conseguimos achar os pedidos! :(");
        console.log(error);
      });
  }, []);

  const handleDelete = (id : string) => {
    deleteOrder(id).then((response) => {
      toast(`Pedido ${id} removido com sucesso!`);
    })
    .catch(() => {
      toast.dark("Ops! Algo de errado não está certo!", {
        position: "bottom-center"
      });
    })
  }

  return (
    <>
      <div className="purchase-container">
        <PurchaseHeader />
        <PurchaseList
          onDeletePurchase={handleDelete}
          purchases={purchases}
        />
        <PurchaseSummary
          amount={purchases.length}
          totalPrice={totalPrice}
        />
      </div>
      <Footer />
    </>
  )
}


export default PurchaseOrder;