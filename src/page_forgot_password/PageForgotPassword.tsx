import { buttonShadowEffect } from '../common/tailwind_constants'
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { db } from '../db'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'

export const PageForgotPassword = (prop) => {

  const [enteredEmail, setEnteredEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [recoverButtonClicked, setRecoverButtonClicked] = useState(false)
  console.log(enteredEmail)

  const accountHolderUsersData = useLiveQuery(async () => await db.user.toArray())

  console.log(!!accountHolderUsersData?.length && accountHolderUsersData)

  const isEmailValid = () => {
    setRecoverButtonClicked(true)
    if (!!accountHolderUsersData?.length) {
      let validUserAccount = accountHolderUsersData.filter((userAccount) => userAccount.email === enteredEmail)
      if (!!validUserAccount.length) {
        prop.onNext()
      }
      else {
        setIsValidEmail(false)
      }
    }
  }

  return (
    <div className='text-[#7D515E] min-h-screen flex flex-col'>
      <Header />
      <div className="bg-[#F3EBF1] flex flex-1 p-4 flex-col items-center justify-center">
        <div className='flex flex-col gap-6 lg:w-2/5 md:w-3/5 sm:w-4/5'>
          <div>
            <div className="font-semibold sm:text-3xl text-2xl">Password Assistance</div>
            <p className='sm:text-lg text-md'>Enter the E-mail address associated with your account</p>
          </div>
          <div className='w-full'>
            <div className="font-bold">E-mail</div>
            <input onChange={(e) => setEnteredEmail(e.target.value)} className='px-4 py-2 w-full rounded-md bg-[#F4DADB]'></input>
          </div>

        <button onClick={() => isEmailValid()} className={`${buttonShadowEffect} w-full font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>RECOVER</button>
          {!isValidEmail && recoverButtonClicked && <div className='sm:text-xl text-md'>The E-mail address you've entered doesn't match any account. <span className='font-semibold'>Sign Up for an Account</span></div>}
        </div>
      </div>
      <Footer />
    </div>
  )
}