import { buttonShadowEffect } from '../common/tailwind_constants'
import girlLoginImage from '../assets/GirlLoginImage.svg'
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
export const PageLogin = () => {
  return (
    <div className='text-[#7D515E] flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-1 lg:flex-row flex-col bg-[#F3EBF1]'>
        <div className='flex md:flex-1 flex-auto justify-center items-center'>
          <div className='bg-white xl:m-24 lg:p-10 lg:m-10 md:m-32 md:p-16 sm:m-24 p-4 m-2.5 w-full rounded-md'>
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
                  <div><a href='/forgot-password'>Forgot Password?</a></div>
                </div>
              </div>
              <button className={`${buttonShadowEffect} font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] w-full p-2 rounded-md`}>LOGIN</button>
            </div>
          </div>
        </div>

        <div className='md:flex-1 flex-auto bg-no-repeat bg-auto sm:bg-right-bottom' style={{ backgroundImage: `url(${girlLoginImage})` }}></div>
        <div className='flex justify-center'><img src={girlLoginImage} className='lg:hidden'></img></div>
      </div>
      <Footer />
    </div>)
}
