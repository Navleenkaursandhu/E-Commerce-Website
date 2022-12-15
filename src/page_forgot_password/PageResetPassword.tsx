import { useReducer, useState } from "react"
import { Footer } from "../common/Footer"
import { Header } from "../common/Header"
import { buttonShadowEffect } from "../common/tailwind_constants"
import { db } from "../db"
import bcrypt from 'bcryptjs'

export const PageResetPassword = (prop) => {

  const [newPasswordTyped, setNewPasswordTyped] = useState('')
  const [newPasswordRetyped, setNewPasswordRetyped] = useState('')
  const [isResetPasswordButtonClicked, setIsResetPasswordButtonClicked] = useState(false)

  const passwordMatched = async() => {
    const getUserAccount = await db.user.where({email: prop.emailEntered}).toArray()
    db.user.update(getUserAccount[0].id, {passwordHash: bcrypt.hashSync(newPasswordTyped, 10)})
    prop.onNext()
  }

  const ResetPasswordButton = () => {
    if (newPasswordTyped && newPasswordRetyped && newPasswordRetyped === newPasswordTyped) {
      return <button onClick={() => {
        passwordMatched()
        setIsResetPasswordButtonClicked(true)
      }}
        className={`${buttonShadowEffect} w-full font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>RESET PASSWORD</button>
    }

    else {
      return <div>
        <button onClick={() => setIsResetPasswordButtonClicked(true)} className={`${buttonShadowEffect} w-full font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>RESET PASSWORD</button>
        {isResetPasswordButtonClicked && <div>Please type in same password in both the above fields </div>}
      </div>
    }
  }

  return (
    <>
      <div className='text-[#7D515E] min-h-screen flex flex-col'>
        <Header />
        <div className="bg-[#F3EBF1] flex flex-1 p-4 flex-col items-center justify-center">
          <div className="flex flex-col gap-6 lg:w-2/5 md:w-3/5 sm:w-4/5 p-4">
            <div className="font-semibold sm:text-3xl text-2xl">Reset Your Password</div>
            <div>
              <div>Enter your new Password</div>
              <input type='password' onChange={(e) => setNewPasswordTyped(e.target.value)} className="px-4 py-2 w-full rounded-md bg-[#F4DADB]" placeholder="Type your new password"></input>
            </div>

            <div>
              <div>Renter your new password</div>
              <input type='password' onChange={(e) => setNewPasswordRetyped(e.target.value)} className="px-4 py-2 w-full rounded-md bg-[#F4DADB]" placeholder="Retype your new password"></input>
            </div>
            <ResetPasswordButton />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}