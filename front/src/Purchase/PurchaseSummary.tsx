import { formatPrice } from "../Orders/helpers";

type Props = {
  amount: number;
  totalPrice: number;
}

function PurchaseSummary( { amount, totalPrice }: Props) {
  return (
    <div className="order-summary-container">
      <div className="order-summary-content">
        <div>
          <span className="amount-selected-container">
            <strong className="amount-selected">{amount}</strong>
          Pedidos Efetuados
        </span>
          <span className="order-summary-total">
            <strong className="amount-selected">{formatPrice(totalPrice)}</strong>
            Valor Total
        </span>
        </div>
      </div>
    </div>
  )
}

export default PurchaseSummary;