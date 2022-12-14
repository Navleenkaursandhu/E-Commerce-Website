import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { buttonShadowEffect } from "../common/tailwind_constants"

export const PasswordIsReset = () => {
  return (
    <>
      <div className='text-[#7D515E] min-h-screen flex flex-col'>
        <Header />
        <div className="bg-[#F3EBF1] sm:text-xl text-md flex flex-1 justify-center items-center">
          <div className="flex flex-col items-center gap-6">
            <span className="material-symbols-outlined sm:text-7xl text-5xl">
              check_circle
            </span>
            <div className="sm:text-4xl text-xl font-semibold">Password Changed!</div>
            <div className="flex flex-col gap-4">
              <div className="text-center">Your password has been changed successfully</div>
              <div className="text-center">Use your new password to login below</div>
            </div>
            <a href='/login'>
              <button className={`${buttonShadowEffect} px-6 font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>LOGIN</button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}