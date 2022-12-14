import { Footer } from '../common/Footer'
import { Header } from '../common/Header'
import { db } from '../db'
import { useLiveQuery } from 'dexie-react-hooks'
import { CURRENCY, product } from '../models/product'
import { BagItemsSummary } from '../common/BagItemsSummary'
import { buttonShadowEffect } from '../common/tailwind_constants'
import { useLoggedInUser } from '../hooks/use_logged_in_user'

export const PageOrderSummary = (prop) => {
  const loggedInUser = useLoggedInUser()

  const bagItems = useLiveQuery(async () => await db.bagItems.toArray())
    ?.map(item => ({
      ...item,
      product: product.read().filter((object, i) => object.id === item.productId)[0]
    }))

  const total = !!bagItems && bagItems.reduce((prev, curr, i) => {
    const newSum = (curr.qty * curr.product.price) + prev
    return newSum
  }, 0)

  const onClickPlaceOrderButton = async () => {
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
    await db.bagItems.clear()
  }

  const displayCreditCardNum = prop.payment.slice(0, prop.payment.length - 4).replace(/[0-9]/g, '*').concat(prop.payment.slice(prop.payment.length - 4))

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
              <div className="w-full p-3 rounded-md bg-[#F4DADB]">{displayCreditCardNum}</div>
            </div>
          </div>

          <div className="flex-1 md:p-16 p-4">
            <div className="flex flex-col gap-16">
              <div>
                <div className="flex-1 text-center sm:text-2xl text-lg md:mt-0 mt-6">Total Items: {!!bagItems && bagItems.reduce((prev, curr, i) => prev + curr.qty, 0)}</div>
                <hr className="border border-b-[#7D515E]"></hr>
              </div>
              <BagItemsSummary />

              <div className="flex flex-col gap-4">
                <div>
                  <div>ORDER SUMMARY</div>
                  <hr className="border border-b-[#7D515E]"></hr>
                </div>

                <div>Subtotal: {CURRENCY} {total}</div>
                <div>Shipping: {CURRENCY} 0.00</div>
                <div>Sales Tax: {CURRENCY} {(total * 0.12).toFixed(2)}</div>
                <div className="pt-8 text-2xl font-semibold">TOTAL: {CURRENCY} {(total * 1.12).toFixed(2)}</div>
              </div>

              <button onClick={() => {
                void onClickPlaceOrderButton()
              }} className={`${buttonShadowEffect} font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>PLACE ORDER</button>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}
