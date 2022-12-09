import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { db } from "../db"
import { useLiveQuery } from "dexie-react-hooks"
import { CURRENCY, product } from "../models/product"
import { BagItemsSummary } from "../common/BagItemsSummary"
import { buttonShadowEffect } from "../common/tailwind_constants"
import { useLoggedInUser } from "../hooks/use_logged_in_user"

export const PageOrderSummary = (prop) => {

  const loggedInUser = useLoggedInUser()

  const bagItems = useLiveQuery(() => db.bagItems.toArray())
    ?.map(item => ({
      ...item,
      product: product.read().filter((object, i) => object.id === item.productId)[0]
    }));

  const total = bagItems && bagItems.reduce((prev, curr, i) => {
    const newSum = (curr.qty * curr.product.price) + prev
    return newSum
  }, 0)


  return (
    <>
      <div className="text-[#7D515E] flex flex-col min-h-screen">
        <Header />
        <div className="bg-[#F3EBF1] sm:text-xl text-md flex flex-1 xl:flex-row flex-col ">
          <div className="md:w-2/5 flex flex-col lg:pl-16 lg:pr-24 md:px-10  px-8 pt-16 gap-6">
            <div>
              <div>ADDRESS DETAILS:</div>
              <div className="w-full p-3 rounded-md bg-[#F4DADB]">{prop.address}</div>
            </div>

            <div>
              <div>PAYMENT DETAILS:</div>
              <div>Credit Card Number</div>
              <div className="w-full p-3 rounded-md bg-[#F4DADB]">{prop.payment}</div>
            </div>
          </div>

          <div className="flex-1 md:p-16 p-4">
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

                <div>Subtotal: {CURRENCY} {total}</div>
                <div>Shipping: {CURRENCY} 0.00</div>
                <div>Sales Tax: {CURRENCY} {total * 0.12}</div>
                <div className="pt-8 text-2xl">TOTAL: {CURRENCY} {(total * 1.12).toFixed(2)}</div>
              </div>

              <button onClick={async() => {
                const orderId = await db.order.add({
                  userId: loggedInUser.id,
                  timestamp: new Date().getTime(),
                  products: bagItems.map(item => {
                    return {
                      productId: item.product.id,
                      qty: item.qty,
                      price: item.product.price,
                      size: item.size
                    }
                  })
                })
                prop.onNext(orderId)
              }} className={`${buttonShadowEffect} font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>PLACE ORDER</button>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}