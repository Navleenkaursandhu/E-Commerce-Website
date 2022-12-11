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
        <div className='flex flex-1 lg:flex-row flex-col bg-[#F3EBF1]'>
          {!!orderPlacedData?.length && orderPlacedData.map((order, i) => {
            return <div key={order.id}>
              <div>OrderId: {order.id}</div>
              <div>Date: {new Date(order.timestamp).toLocaleString()}</div>
              <div>Total: {CURRENCY} {order.products.map((product) => product.price * product.qty).reduce((prev, curr) => prev + curr)}</div>
              <div>Status: Processing</div>

              <div className="mt-6">
                {order.products.map((productOrdered) => {
                  return <div>
                    <div>{productOrdered.product.name}</div>
                    <div>{productOrdered.product.description}</div>
                    <img className="w-1/6" src={productOrdered.product.image}></img>
                    <div>Color: {productOrdered.product.color}</div>
                    <div>Size: {productOrdered.size}</div>
                    <div>Quantity: {productOrdered.qty}</div>
                    <div>Each: {CURRENCY} {productOrdered.price}</div>
                    <div>Total: {CURRENCY} {productOrdered.product.price * productOrdered.qty}</div>





                  </div>
                })}
              </div>
            </div>
          })}
        </div>
        <Footer />
      </div>
    </>
  )
}