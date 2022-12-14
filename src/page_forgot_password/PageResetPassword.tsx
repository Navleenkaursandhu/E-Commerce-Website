import { Footer } from "../common/Footer"
import { Header } from "../common/Header"

export const PageResetPassword = () => {
  return (
    <>
      <div className='text-[#7D515E] min-h-screen flex flex-col'>
        <Header />
        <div className="bg-[#F3EBF1] flex flex-1 p-4 flex-col items-center justify-center">
          <div className="flex flex-col gap-6 lg:w-2/5 md:w-3/5 sm:w-4/5 p-4">
            <div className="font-semibold sm:text-3xl text-2xl">Reset Your Password</div>
            <div>
              <div>Enter your new Password</div>
              <input className="px-4 py-2 w-full rounded-md bg-[#F4DADB]" placeholder="Type your new password"></input>
            </div>

            <div>
              <div>Renter your new password</div>
              <input className="px-4 py-2 w-full rounded-md bg-[#F4DADB]" placeholder="Retype your new password"></input>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}