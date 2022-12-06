import { db } from "../db"
import { useLiveQuery } from "dexie-react-hooks"
import { buttonShadowEffect } from "./tailwind_constants"
export const ShoppingBag = () => {

  const bagItems = useLiveQuery(() => db.bagItems.toArray())

  const totalItems = bagItems?.reduce((prev, curr, i) => prev + curr.qty, 0)

  return (
    <>
      <a href='/start-checkout'>
        <button className={`${buttonShadowEffect} px-3 bg-[#F4DADB] text-[#7D515E] rounded-md flex flex-row items-center gap-4`}>
          <span className="material-symbols-outlined text-3xl ">
            shopping_bag
          </span>
          <span>{totalItems}</span>
        </button>
      </a>
    </>
  )
}
