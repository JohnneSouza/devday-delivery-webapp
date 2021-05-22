import { formatPrice } from "../Orders/helpers";
import { Purchase } from "../Orders/types";

type Props = {
  purchase: Purchase;
  handleDelete: (id: string) => void;
}

function PurchaseCard({ purchase, handleDelete }: Props) {
  return (
    <div className={"purchase-card-container"}>
      <h3 className="order-card-title">Valor do Pedido</h3>
      <h3 className="order-card-title">
        {formatPrice(purchase.total)}
      </h3>
      <div className="purchase-card-description">
        <h3>Produtos</h3>
          <ul>
            {purchase.products.map(product => {
              return <li key={product.id}>1x {product.name.substring(0, 21)}</li>
            })}
          </ul>
      </div>
      <button
        className="button-remove"
        onClick={() => handleDelete(purchase.id)}
        >
        Apagar Pedido
        </button>
    </div>
  )
}

export default PurchaseCard;