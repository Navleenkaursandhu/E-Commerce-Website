import { buttonShadowEffect } from '../common/tailwind_constants'
import girlLoginImage from '../assets/GirlLoginImage.svg'
export const PageLogin = () => {
  return (
    <>
      <div className='bg-no-repeat bg-auto h-screen bg-right-bottom text-[#7D515E] bg-[#F3EBF1]' style={{ backgroundImage: `url(${girlLoginImage})` }}>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <div className='bg-white p-16 ml-56 w-9/12'>
            <div className='text-center font-semibold text-2xl'>LOGIN</div>
            <div className='flex flex-col gap-16 pt-16'>
              <div className='flex flex-col gap-2'>
                <div>Username</div>
                <input className='w-full px-4 py-2 rounded-md bg-[#F4DADB]' placeholder='Type your username'></input>
              </div>
              <div className='flex flex-col gap-2'>
                <div>Password</div>
                <input className='w-full px-4 py-2 rounded-md bg-[#F4DADB]' placeholder='Type your password'></input>
                <div className='flex justify-end'>
                  <div>Forgot Password?</div>
                </div>
              </div>
              <button className={`${buttonShadowEffect} font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] w-full p-2 rounded-md`}>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
