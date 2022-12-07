import { buttonShadowEffect } from '../common/tailwind_constants'
import girlSignUpImage from '../assets/girlSignUpImage.svg'
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'

export const PageSignUp = (prop) => {
  console.log(prop)
  return (
    <div className='text-[#7D515E] min-h-screen flex flex-col'>
      <Header />
      <div className='flex flex-1 lg:flex-row flex-col  bg-[#F3EBF1]' >
        <div className="md:flex-1 flex-auto bg-no-repeat bg-auto sm:bg-left-bottom" style={{ backgroundImage: `url(${girlSignUpImage})` }}></div>

        <div className='flex md:flex-1 justify-center items-center'>
          <div className='bg-white xl:m-24 lg:p-10 lg:m-10 md:m-32 md:p-16 sm:m-24 p-4 m-2.5 w-full rounded-md'>
            <div className='text-center font-semibold text-2xl'>CREATE ACCOUNT</div>
            <div className='flex flex-col gap-10 pt-16'>
              <div className='flex flex-col gap-2'>
                <div>First Name</div>
                <input className='w-full px-4 py-2 rounded-md bg-[#F4DADB]' placeholder='Type your first name'></input>
              </div>
              <div className='flex flex-col gap-2'>
                <div>Last Name</div>
                <input className='w-full px-4 py-2 rounded-md bg-[#F4DADB]' placeholder='Type your last name'></input>
              </div>
              <div className='flex flex-col gap-2'>
                <div>E-mail</div>
                <input className='w-full px-4 py-2 rounded-md bg-[#F4DADB]' placeholder='Type your e-mail address'></input>
                <div className='flex justify-end'>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <div>Password</div>
                <input className='w-full px-4 py-2 rounded-md bg-[#F4DADB]' placeholder='At least 6 characters'></input>
              </div>
              <div className='flex flex-col gap-2'>
                <div>Confirm Password</div>
                <input className='w-full px-4 py-2 rounded-md bg-[#F4DADB]'></input>
              </div>
              <button onClick={() => prop.onNext()} className={`${buttonShadowEffect} p-2 font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] w-full rounded-md`}>CONTINUE</button>
              <div className='text-center'>*This will not create a real account</div>
            </div>
          </div>
        </div>

        <div className='flex justify-center'><img src={girlSignUpImage} className='lg:hidden'></img></div>
      </div>
      <Footer />
    </div>
  )
}