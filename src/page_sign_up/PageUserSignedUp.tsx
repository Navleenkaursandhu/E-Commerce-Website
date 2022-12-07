import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { buttonShadowEffect } from "../common/tailwind_constants"

export const PageUserSignedUp = () => {
  return (
    <>
      <div className='text-[#7D515E] min-h-screen flex flex-col'>
        <Header />
        <div className='flex flex-1 lg:flex-row flex-col justify-center items-center bg-[#F3EBF1]'>
          <div className="flex flex-col items-center gap-6">
            <span className="material-symbols-outlined sm:text-7xl text-5xl">
              check_circle
            </span>
            <div className="sm:text-4xl text-xl font-semibold mb-10">Thanks for Signing Up!</div>
            <button className={`${buttonShadowEffect} font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] w-full p-2 rounded-md`}>CONTINUE TO LOGIN PAGE</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}