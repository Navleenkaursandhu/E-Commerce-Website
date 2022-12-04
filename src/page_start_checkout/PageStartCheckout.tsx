import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../db"
import { product } from "../models/product"

export const PageStartCheckout = () => {

  const bagItems = useLiveQuery(() => db.bagItems.toArray())
  console.log(bagItems)

  return (
    <div className="text-[#7D515E]">
      <div>Checkout</div>
    </div>
  )
}