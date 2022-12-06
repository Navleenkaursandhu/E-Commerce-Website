import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { buttonShadowEffect } from "../common/tailwind_constants"

export const PagePayment = (prop) => {
  return (
    <>
      <div className="text-[#7D515E] flex flex-col min-h-screen">
        <Header />
        <div className="bg-[#F3EBF1] sm:text-xl text-md flex flex-1 justify-center items-center">
          <div className="flex flex-col gap-6 md:w-auto w-full md:p-0 p-4 ">
            <div>
              <div>Credit Card Number</div>
              <input className='w-full px-4 py-2 rounded-md bg-[#F4DADB]' placeholder="Type your credit card number"></input>
            </div>

            <div className="flex md:flex-row flex-col gap-2">
              <div>
                <div>Expiry Month*</div>
                <input className='p-1.5 rounded-md bg-[#F4DADB]'></input>
              </div>

              <div>
                <div>Expiry Year*</div>
                <input className='p-1.5 rounded-md bg-[#F4DADB]'></input>
              </div>

              <div>
                <div>CVV*</div>
                <input className='p-1.5 rounded-md bg-[#F4DADB]'></input>
              </div>

            </div>

            <button onClick={() => prop.onNext()} className={`${buttonShadowEffect} w-full font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>REVIEW ORDER SUMMARY</button>

          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}