import { useLiveQuery } from "dexie-react-hooks"
import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { db } from "../db"
import { product } from "../models/product"
import { buttonShadowEffect } from "../common/tailwind_constants"

export const PageStartCheckout = () => {

  const bagItems = useLiveQuery(() => db.bagItems.toArray())

  return (
    <div className="text-[#7D515E] flex flex-col min-h-screen">
      <Header />
      <div className="bg-[#F3EBF1] text-xl flex-1">
        <div className="p-10">
          <div className="flex flex-row">
            <div className="text-2xl">MY BAG</div>
            <div className="flex-1 text-center text-2xl">{bagItems && bagItems.reduce((prev, curr, i) => prev + curr.qty, 0)} Items</div>
          </div>
          <div className="h-0.5 bg-[#7D515E]"></div>
        </div>

        <div className="flex flex-row p-10 justify-between">
          <div className="flex flex-col gap-10">
            {bagItems && bagItems.map((bagObj, i) => {
              return (
                <div>{product.read().filter((object, i) => object.id === bagObj.id).map((obj, i) => {
                  return (
                    <>
                      <div className="flex gap-16">
                        <img className="w-[24rem]" src={obj.image}></img>
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
                })}
                </div>
              )
            })}
          </div>
          <div className="flex flex-col flex-1 items-center gap-4">
            <div className="text-2xl">Estimated Total:</div>
            <button className={`${buttonShadowEffect} w-4/5 font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>Start Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

