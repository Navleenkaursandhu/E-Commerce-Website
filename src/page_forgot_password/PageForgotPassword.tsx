import { buttonShadowEffect } from '../common/tailwind_constants'
export const PageForgotPassword = () => {
  return (
    <div className="bg-[#F3EBF1] h-screen flex flex-col items-center text-[#7D515E]">
      <div className="mt-32">
        <div className="font-semibold text-3xl mb-4">Password Assistance</div>
        <p>Enter the mobile number or the E-mail address associated with your account</p>
        <div className='flex flex-col gap-2'>
          <div className="font-bold mt-10">E-mail or Mobile Number</div>
          <input className='px-4 py-2 rounded-md bg-[#F4DADB] mb-8'></input>
          <button className={`${buttonShadowEffect}  font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] w-full p-2 rounded-md`}>LOGIN</button>
        </div>
      </div>
    </div>
  )
}