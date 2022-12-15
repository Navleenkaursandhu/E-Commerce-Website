import { db } from '../db'
import { CURRENCY, product } from '../models/product'
import { useLiveQuery } from 'dexie-react-hooks'

export const BagItemsSummary = () => {
  const bagItems = useLiveQuery(async () => await db.bagItems.toArray())
    ?.map(item => ({
      ...item,
      product: product.read().filter((object, i) => object.id === item.productId)[0]
    }))
  return (
    <>
      {!!bagItems && bagItems.map((bagObj, i) => {
        return (
          <div key={bagObj.id}>
            <div className="flex sm:flex-row flex-col lg:gap-12 gap-6 ">
              <img className="w-[20rem] rounded-md" src={bagObj.product.image}></img>
              <div className="flex sm:flex-row md:gap-32 sm:gap-12 gap-6 flex-1">
                <div className="flex-1">
                  <div className="sm:text-2xl text-lg">{bagObj.product.name}</div>
                  <div>Color: {bagObj.product.color}</div>
                  <div>Size: {bagObj.size}</div>
                  <div>Quantity: {bagObj.qty}</div>
                  <div>Each: {CURRENCY} {bagObj.product.price}</div>
                  <div>Total: {CURRENCY} {bagObj.qty * bagObj.product.price}</div>
                </div>
                <div>
                  <button><span onClick={async () => await db.bagItems.delete(bagObj.id)} className="material-symbols-outlined">close</span></button>
                </div>
              </div>
            </div>
            <hr className="border border-b-[#7D515E] mt-16"></hr>
          </div>
        )
      })}
    </>
  )
}
