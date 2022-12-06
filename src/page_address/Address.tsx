import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { buttonShadowEffect } from "../common/tailwind_constants"

export const Address = () => {
  return (
    <>
      <div className="text-[#7D515E] flex flex-col min-h-screen">
        <Header />

        <div className="bg-[#F3EBF1] sm:text-xl text-md flex flex-1 justify-center items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-72 items-center border-b-2 border-[#7D515E]">
              <span className="material-symbols-outlined text-6xl">
                local_shipping
              </span>
              <div className="text-3xl">Ship to me at</div>
            </div>

            <div className='flex flex-col gap-2'>
              <div>Address</div>
              <input className='w-full px-4 py-2 rounded-md bg-[#F4DADB]' placeholder='Type your address'></input>
            </div>

            <div className="mb-12">Estimate Delivery: 3 - 7 Business Days</div>

            <a href='/payment' className="w-full">
              <button className={`${buttonShadowEffect} w-full font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>CONTINUE TO PAYMENT</button>
            </a>
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}