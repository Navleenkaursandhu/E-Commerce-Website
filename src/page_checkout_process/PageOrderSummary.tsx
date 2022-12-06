import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { db } from "../db"
import { useLiveQuery } from "dexie-react-hooks"
import { CURRENCY, product } from "../models/product"
import { BagItemsSummary } from "../common/BagItemsSummary"

export const PageOrderSummary = () => {
  const bagItems = useLiveQuery(() => db.bagItems.toArray())
    ?.map(item => ({
      ...item,
      product: product.read().filter((object, i) => object.id === item.productId)[0]
    }));
  return (
    <>
      <div className="text-[#7D515E] flex flex-col min-h-screen">
        <Header />
        <div className="bg-[#F3EBF1] sm:text-xl text-md flex flex-1 flex-row">
          <div className="w-2/5 flex flex-col p-16 gap-6">
            <div>
              <div>ADDRESS DETAILS:</div>
              <input className="w-full px-4 py-2 rounded-md bg-[#F4DADB]"></input>
            </div>

            <div>
              <div>PAYMENT DETAILS:</div>
              <div>Credit Card Number</div>
              <input className="w-full px-4 py-2 rounded-md bg-[#F4DADB]"></input>
            </div>
          </div>



          <div className="flex-1 p-16">
            <div className="flex flex-col gap-16">
              <div>
                <div className="flex-1 text-center sm:text-2xl text-lg">Total Items: {bagItems && bagItems.reduce((prev, curr, i) => prev + curr.qty, 0)}</div>
                <div className="h-0.5 bg-[#7D515E]"></div>
              </div>
              <BagItemsSummary />

              <div className="flex flex-col gap-4">
                <div>
                  <div>ORDER SUMMARY</div>
                  <div className="h-0.5 bg-[#7D515E]"></div>
                </div>

                <div>Order ID: { }</div>
                <div>Subtotal: {CURRENCY} {bagItems && bagItems.reduce((prev, curr, i) => {
                  const newSum = (curr.qty * curr.product.price) + prev
                  return newSum
                }, 0)}</div>
                <div>Shipping: CAD 0.00</div>
                <div>Sales Tax: { }</div>

                <div className="pt-8">TOTAL: { }</div>


              </div>
            </div>
          </div>
        </div>



        <Footer />
      </div>
    </>
  )
}