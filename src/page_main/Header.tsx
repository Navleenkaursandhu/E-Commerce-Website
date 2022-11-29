import { buttonShadowEffect } from "../common/tailwind_constants"
export const Header = () => {
  return (
    <>
      <div className="flex items-center bg-[#7D515E] justify-between px-14 py-6 text-[#F5F5F5] font-medium text-lg">
        <div className="flex gap-20">
          <div>CLASSIC TEES</div>
          <div>About us</div>
          <div>Orders</div>
        </div>

        <div className="flex gap-20">
          <button className= {`${buttonShadowEffect} px-3 bg-[#F4DADB] text-[#7d515e] rounded-md`}>LOGIN</button>
          <button className= {`${buttonShadowEffect} px-3 bg-[#F4DADB] text-[#7d515e] rounded-md`}>SIGN UP</button>
          <span className="material-symbols-outlined text-4xl">
            shopping_bag
          </span>

        </div>
      </div>
    </>
  )
}