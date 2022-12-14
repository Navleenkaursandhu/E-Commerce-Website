import { buttonShadowEffect } from '../common/tailwind_constants'
import girlLoginImage from '../assets/GirlLoginImage.svg'
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { useState } from 'react'
import { db } from '../db'
import bcrypt from 'bcryptjs'
import addDays from 'date-fns/addDays'

export const PageLogin = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [loginFailed, setLoginFailed] = useState(false)

  const loginUser = async () => {
    setLoginFailed(false)

    const result = await db.user.where({ email: userEmail }).toArray()

    if (result.length === 0) {
      setLoginFailed(true)
    }

    const isMatch = bcrypt.compareSync(userPassword, result[0].passwordHash)
    if (!isMatch) {
      setLoginFailed(true)
    } else {
      await db.loginSession.clear()

      await db.loginSession.add({
        userId: result[0].id,
        expiryTimestamp: addDays(new Date(), 7).getTime()
      })

      window.open('/', '_self')
    }
  }

  return (
    <div className='text-[#7D515E] flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-1 lg:flex-row flex-col bg-[#F3EBF1]'>
        <div className='flex md:flex-1 flex-auto justify-center items-center'>
          <div className='bg-white xl:m-24 lg:p-10 lg:m-10 md:m-32 md:p-16 sm:m-24 p-4 m-2.5 w-full rounded-md'>
            <div className='text-center font-semibold text-2xl'>LOGIN</div>
            <div className='flex flex-col gap-16 pt-16'>
              <div className='flex flex-col gap-2'>
                <div>E-mail</div>
                <input onChange={(e) => setUserEmail(e.target.value)} className='w-full px-4 py-2 rounded-md bg-[#F4DADB]' placeholder='Type your e-mail address'></input>
              </div>
              <div className='flex flex-col gap-2'>
                <div>Password</div>
                <input onChange={(e) => setUserPassword(e.target.value)} type="password" className='w-full px-4 py-2 rounded-md bg-[#F4DADB]' placeholder='Type your password'></input>
                <div className='flex justify-end'>
                  <div><a href='/forgot-password'>Forgot Password?</a></div>
                </div>
              </div>
              <button onClick={() => { void loginUser() }} className={`${buttonShadowEffect} font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] w-full p-2 rounded-md`}>LOGIN</button>
              {loginFailed && <div className="flex items-center justify-center gap-1.5 text-red-800 text-lg"><span className="material-symbols-outlined">
                warning
              </span>Oops! Incorrect E-mail or Password</div>}
            </div>
          </div>
        </div>

        <div className='md:flex-1 flex-auto bg-no-repeat bg-auto sm:bg-right-bottom' style={{ backgroundImage: `url(${girlLoginImage})` }}></div>
        <div className='flex justify-center'><img src={girlLoginImage} className='lg:hidden'></img></div>
      </div>
      <Footer />
    </div>)
}
