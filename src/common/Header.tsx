import { useEffect, useState } from 'react'
import { ShoppingBag } from './ShoppingBag'
import { buttonShadowEffect } from './tailwind_constants'
import { db } from '../db'
import { useLoggedInUser } from '../hooks/use_logged_in_user'

export const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const userLoginSessionData = useLoggedInUser()

  const logOutUser = async () => {
    await db.loginSession.clear()
    window.location.reload()
  }

  useEffect(() => {
    const closeMenu = (e) => {
      setIsMenuClicked(false)
    }
    document.body.addEventListener('click', closeMenu)

    return () => document.body.removeEventListener('click', closeMenu)
  }, [])

  return (
    <>
      <div className="flex flex-row bg-[#7D515E] justify-between sm:p-6 p-4 text-lg font-medium">
        <div className="flex flex-row items-center md:gap-10 gap-4">
          <span onClick={e => {
            setIsMenuClicked(prev => !prev)
            e.stopPropagation()
          }} className="sm:hidden inline text-[#F4DADB] material-symbols-outlined">
            menu
          </span>
          <a className="text-[#F4DADB] lg:text-3xl md:text-2xl text-lg" href='/'>CLASSIC TEES</a>
          <a className="sm:inline hidden text-[#F4DADB] lg:text-lg md:text-md text-sm" href='/about-us'>About us</a>
          {userLoginSessionData && <div className="sm:inline hidden text-[#F4DADB] lg:text-lg md:text-md text-sm"><a href='/order-history'>Orders</a></div>}
        </div>

        {isMenuClicked && <div onClick={(e) => e.stopPropagation()} className="flex flex-col z-10 gap-6 sm:hidden absolute top-20 bg-[#7D515E] p-6 rounded-md text-sm">
          <a className="text-[#F4DADB] w-full" href='/about-us'>About us</a>
          {userLoginSessionData && <a className="w-full text-[#F4DADB]" href='/order-history'>Orders</a>}
          {!userLoginSessionData && <div>
            <button className={`${buttonShadowEffect} px-1.5 py-1 bg-[#F4DADB] rounded-md`}><a href='/login'>LOGIN</a></button>
          </div>}
          {!userLoginSessionData && <div>
            <button className={`${buttonShadowEffect} px-1.5 py-1 bg-[#F4DADB] rounded-md`}><a href='./sign-up'>SIGN UP</a></button>
          </div>}
          {userLoginSessionData && <div>
            <button onClick={async () => await logOutUser()} className={`${buttonShadowEffect} px-3 py-1 bg-[#F4DADB] rounded-md`}>LOG OUT</button>
          </div>}
          <div className="text-[#F4DADB]"><ShoppingBag /></div>
        </div>}

        <div className="flex items-center justify-end md:gap-10 gap-4">
          {userLoginSessionData && <div className="text-[#F4DADB] text-center ml-6 lg:text-lg sm:text-md text-sm">Welcome {userLoginSessionData.firstName}</div>}
          {!userLoginSessionData && <button className={`${buttonShadowEffect} px-3 py-1 bg-[#F4DADB] rounded-md sm:inline hidden`}><a href='/login'>LOGIN</a></button>}
          {!userLoginSessionData && <button className={`${buttonShadowEffect} px-3 py-1 bg-[#F4DADB] rounded-md sm:inline hidden`}><a href='./sign-up'>SIGN UP</a></button>}
          {userLoginSessionData && <button onClick={async () => await logOutUser()} className={`${buttonShadowEffect} px-3 py-1 bg-[#F4DADB] rounded-md sm:inline hidden`}>LOG OUT</button>}
          <div className=" sm:inline hidden"><ShoppingBag /></div>
        </div>
      </div>
    </>
  )
}
