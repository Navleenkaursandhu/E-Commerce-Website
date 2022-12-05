import { useLiveQuery } from "dexie-react-hooks"
import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { db } from "../db"
import { product } from "../models/product"

console.log(product.read())

export const PageStartCheckout = () => {

  const bagItems = useLiveQuery(() => db.bagItems.toArray())
  console.log(bagItems)
  return (
    <div className="text-[#7D515E] flex flex-col min-h-screen">
      <Header />
      <div className="bg-[#F3EBF1] text-xl flex-1">
        <div className="p-10">
          <div className="flex flex-row">
            <div className="text-2xl">MY BAG</div>
            <div className="flex-1 text-center text-2xl">Items</div>
          </div>
          <div className="h-0.5 bg-[#7D515E]"></div>
        </div>
        {bagItems && bagItems.map((bagObj, i) => {
          return (
            <div>
              <div>{product.read().filter((object, i) => object.id === bagObj.id).map((obj, i) => {
                return (
                  <>
                    <div className="flex flex-row p-10 gap-16">
                      <img className="w-1/5" src={obj.image}></img>
                      <div>
                        <div className="text-2xl">{obj.name}</div>
                        <div>Color: {obj.color}</div>
                        <div>Size: {bagObj.size}</div>
                        <div>Quantity: {bagObj.qty}</div>
                        <div>Each: {obj.currency} {obj.price}</div>
                        <div>Total: {obj.currency} {bagObj.qty * obj.price}</div>
                      </div>
                      <span className="material-symbols-outlined">close</span>
                    </div>
                  </>)
              })}</div>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}
