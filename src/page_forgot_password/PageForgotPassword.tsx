import { buttonShadowEffect } from '../common/tailwind_constants'
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
export const PageForgotPassword = () => {
  return (
    <div className='text-[#7D515E] min-h-screen flex flex-col'>
      <Header />
      <div className="bg-[#F3EBF1] flex flex-1 p-4 flex-col items-center justify-center">
        <div className='flex flex-col gap-6'>
          <div>
            <div className="font-semibold text-3xl">Password Assistance</div>
            <p>Enter the mobile number or the E-mail address associated with your account</p>
          </div>
          <div className='w-full'>
            <div className="font-bold">E-mail or Mobile Number</div>
            <input className='px-4 py-2 w-full rounded-md bg-[#F4DADB]'></input>
          </div>
          <button className={`${buttonShadowEffect} w-full font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>LOGIN</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}