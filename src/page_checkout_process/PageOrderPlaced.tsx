import { Footer } from '../common/Footer'
import { Header } from '../common/Header'

export const PageOrderPlaced = (prop) => {
  const orderIdString = prop.orderIdNum.toString().padStart(5, 0)
  return (
    <>
      <div className="text-[#7D515E] flex flex-col min-h-screen">
        <Header />
        <div className="bg-[#F3EBF1] sm:text-xl text-md flex flex-1 justify-center items-center">
          <div className="flex flex-col items-center gap-6">
            <span className="material-symbols-outlined sm:text-7xl text-5xl">
              check_circle
            </span>
            <div className="sm:text-4xl text-xl font-semibold" >ORDER SUCCESSFULLY PLACED</div>
            <div className="sm:text-3xl text-lg">Your Order ID: {orderIdString}</div>
            <div className="flex gap-2 p-2 text-red-800">
              <span className="material-symbols-outlined">
                warning
              </span>
              <div>Its just a practice Website. No user information is stored on server and no actual order has been placed.</div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}
