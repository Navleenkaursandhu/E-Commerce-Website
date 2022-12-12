import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { db } from "../db"
import { useLiveQuery } from "dexie-react-hooks"
import { useLoggedInUser } from "../hooks/use_logged_in_user"
import { CURRENCY, product } from "../models/product"

export const PageOrderHistory = () => {

  const loggedInUserId = useLoggedInUser()?.id
  console.log(loggedInUserId)

  const orderPlacedData = useLiveQuery(async () => await db.order.where({ userId: loggedInUserId || -1 }).toArray(), [loggedInUserId])
    ?.map((order) => {
      return {
        ...order,
        products: order.products.map((productInfo) => {
          return {
            ...productInfo,
            product: product.read().filter((object, i) => object.id === productInfo.productId)[0]
          }
        })
      }
    })


  console.log(orderPlacedData)


  return (
    <>
      <div className='text-[#7D515E] flex flex-col min-h-screen'>
        <Header />
        <div className='flex flex-1 flex-col items-center bg-[#F3EBF1]'>
          <div className="flex flex-col gap-8 md:p-16 sm:p-10 p-4 lg:w-1/2 w-full">
            {!!orderPlacedData?.length && orderPlacedData.map((order, i) => {
              return <div className="rounded-md bg-[#F4DADB] flex flex-col lg:gap-6 gap-12 p-4">
                <div key={order.id}>
                  <div>OrderId: {order.id.toString().padStart(5, '0')}</div>
                  <div>Date: {new Date(order.timestamp).toLocaleString()}</div>
                  <div>Total: {CURRENCY} {order.products.map((product) => product.price * product.qty).reduce((prev, curr) => prev + curr)}</div>
                  <div>Status: Processing</div>
                </div>

                <div>
                  <div className="text-center">ITEMS</div>
                  <hr className="border-1 border-[#7D515E]"></hr>
                </div>

                {order.products.map((productOrdered) => {
                  return <div className="flex sm:flex-row flex-col sm:gap-16 gap-4">
                    <div>
                      <img className="w-[10rem] rounded-md" src={productOrdered.product.image}></img>
                    </div>
                    <div>
                      <div>{productOrdered.product.name}</div>
                      <hr className="border-1 border-[#7D515E]"></hr>
                      <div>{productOrdered.product.description}</div>
                      <div>Color: {productOrdered.product.color}</div>
                      <div>Size: {productOrdered.size}</div>
                      <div>Quantity: {productOrdered.qty}</div>
                      <div>Each: {CURRENCY} {productOrdered.price}</div>
                      <div>Total: {CURRENCY} {productOrdered.product.price * productOrdered.qty}</div>
                    </div>
                  </div>
                })}

              </div>

            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}