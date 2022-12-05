import { useEffect, useState } from "react"
import { ShoppingBag } from "./ShoppingBag"
import { buttonShadowEffect } from "./tailwind_constants"
export const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  useEffect(() => {

    const closeMenu = (e) => {
      console.log(e)
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
            setIsMenuClicked(prev => !prev);
            e.stopPropagation();
          }} className="sm:hidden inline text-[#F4DADB] material-symbols-outlined">
            menu
          </span>
          <a className="text-[#F4DADB] text-3xl" href='/'>CLASSIC TEES</a>
          <a className="sm:inline hidden text-[#F4DADB]" href='/about-us'>About us</a>
          <div className="sm:inline hidden text-[#F4DADB]">Orders</div>
        </div>



        {isMenuClicked && <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-6 sm:hidden absolute top-20 bg-[#7D515E] p-6 rounded-md text-sm">
          <a className="text-[#F4DADB]" href='/about-us'>About us</a>
          <div className="text-[#F4DADB]">Orders</div>
          <div>
            <button className={`${buttonShadowEffect} px-1.5 py-1 bg-[#F4DADB] rounded-md`}><a href='/login'>LOGIN</a></button>
          </div>
          <div>
            <button className={`${buttonShadowEffect} px-1.5 py-1 bg-[#F4DADB] rounded-md`}><a href='./sign-up'>SIGN UP</a></button>
          </div>
          <div className="text-[#F4DADB]"><ShoppingBag /></div>
        </div>}

        <div className="flex items-center justify-end md:gap-10 gap-4">
          <button className={`${buttonShadowEffect} px-3 py-1 bg-[#F4DADB] rounded-md sm:inline hidden`}><a href='/login'>LOGIN</a></button>
          <button className={`${buttonShadowEffect} px-3 py-1 bg-[#F4DADB] rounded-md sm:inline hidden`}><a href='./sign-up'>SIGN UP</a></button>
          <div className="md:text-4xl text-3xl text-[#F4DADB] sm:inline hidden"> <ShoppingBag /></div>
        </div>
      </div>
    </>
  )
}