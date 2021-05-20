import { Purchase } from "../Orders/types";
import PurchaseCard from "./PurchaseCard";

type Props = {
  purchases: Purchase[];
  onDeletePurchase: (id: string) => void;
}

function PurchaseList({ purchases, onDeletePurchase }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {purchases.map(purchase => {
          return <PurchaseCard
            handleDelete={onDeletePurchase}
            key={purchase.id}
            purchase={purchase}
          />
        })
        }
      </div>
    </div>
  )
}

export default PurchaseList;