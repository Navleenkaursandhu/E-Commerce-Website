import { buttonShadowEffect } from "../common/tailwind_constants"
export const Header = () => {
  return (
    <>
      <div className="flex bg-[#7D515E] justify-between p-6 text-lg font-medium">
        <div className="flex items-center gap-10">
          <div className="text-[#F4DADB] text-3xl">CLASSIC TEES</div>
          <div className="text-[#F4DADB]">
            <a href='/AboutUs'>About us</a>
          </div>
          <div className="text-[#F4DADB]">Orders</div>
        </div>

        <div className="flex items-center gap-10">
          <button className={`${buttonShadowEffect} px-3 py-1 bg-[#F4DADB] rounded-md`}><a href='/Login'>LOGIN</a></button>
          <button className={`${buttonShadowEffect} px-3 py-1 bg-[#F4DADB] rounded-md`}>SIGN UP</button>
          <span className="material-symbols-outlined text-4xl text-[#F4DADB]">
            shopping_bag
          </span>

        </div>
      </div>
    </>
  )
}