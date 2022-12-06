import { useLiveQuery } from "dexie-react-hooks"
import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { db } from "../db"
import { CURRENCY, product } from "../models/product"
import { buttonShadowEffect } from "../common/tailwind_constants"

export const PageStartCheckout = () => {
  const bagItems = useLiveQuery(() => db.bagItems.toArray())
    ?.map(item => ({
      ...item,
      product: product.read().filter((object, i) => object.id === item.productId)[0]
    }));
  return (
    <div className="text-[#7D515E] flex flex-col min-h-screen">
      <Header />
      <div className="bg-[#F3EBF1] sm:text-xl text-md flex-1">
        <div className="p-10">
          <div className="flex flex-row">
            <div className="sm:text-2xl text-lg">MY BAG</div>
            <div className="flex-1 text-center sm:text-2xl text-lg">Total Items: {bagItems && bagItems.reduce((prev, curr, i) => prev + curr.qty, 0)}</div>
          </div>
          <div className="h-0.5 bg-[#7D515E]"></div>
        </div>

        <div className="flex lg:flex-row flex-col p-10 lg:justify-between lg:gap-0 gap-16">
          <div className="flex flex-col gap-16">
            {bagItems && bagItems.map((bagObj, i) => {
              return (
                <div key={bagObj.id}>
                  <div className="flex sm:flex-row flex-col lg:gap-16 gap-6 sm:justify-between">
                    <img className="w-[20rem] rounded-md" src={bagObj.product.image}></img>
                    <div className="flex sm:flex-row md:gap-32 sm:gap-12 gap-6">
                      <div>
                        <div className="sm:text-2xl text-lg">{bagObj.product.name}</div>
                        <div>Color: {bagObj.product.color}</div>
                        <div>Size: {bagObj.size}</div>
                        <div>Quantity: {bagObj.qty}</div>
                        <div>Each: {CURRENCY} {bagObj.product.price}</div>
                        <div>Total: {CURRENCY} {bagObj.qty * bagObj.product.price}</div>
                      </div>
                      <div><span onClick={() => db.bagItems.delete(bagObj.id)} className="material-symbols-outlined">close</span></div>
                    </div>
                  </div>
                  <div className="sm:hidden h-0.5 bg-[#7D515E]"></div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-col flex-1 items-center gap-4">
            <div className="sm:text-2xl text-lg">Estimated Total: {CURRENCY} {bagItems && bagItems.reduce((prev, curr, i) => {
              const newSum = (curr.qty * curr.product.price) + prev
              return newSum
            }, 0)}</div>
            <a href='/address' className="w-4/5">
              <button className={`${buttonShadowEffect} w-full font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>Start Checkout</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

