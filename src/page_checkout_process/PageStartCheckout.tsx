import { useLiveQuery } from 'dexie-react-hooks'
import { Footer } from '../common/Footer'
import { Header } from '../common/Header'
import { db } from '../db'
import { CURRENCY, product } from '../models/product'
import { buttonShadowEffect } from '../common/tailwind_constants'
import { BagItemsSummary } from '../common/BagItemsSummary'
import { useLoggedInUser } from '../hooks/use_logged_in_user'

export const PageStartCheckout = (prop) => {
  const loggedInUser = useLoggedInUser()

  const bagItems = useLiveQuery(async () => await db.bagItems.toArray())
    ?.map(item => ({
      ...item,
      product: product.read().filter((object, i) => object.id === item.productId)[0]
    }))

  return (
    <div className="text-[#7D515E] flex flex-col min-h-screen">
      <Header />
      <div className="bg-[#F3EBF1] sm:text-xl text-md flex-1">
        {bagItems?.length === 0 &&
          <div className="p-6 mt-48 text-center font-semibold sm:text-4xl text-xl">YOUR BAG IS EMPTY!</div>
        }

        {!!bagItems?.length && <div className="p-10">
          <div className="flex flex-row">
            <div className="sm:text-2xl text-lg">MY BAG</div>
            <div className="flex-1 text-center sm:text-2xl text-lg">Total Items: {!!bagItems && bagItems.reduce((prev, curr, i) => prev + curr.qty, 0)}</div>
          </div>
          <div className="h-0.5 bg-[#7D515E]"></div>
        </div>}

        {!!bagItems?.length && <div className="flex lg:flex-row flex-col p-10 lg:justify-between lg:gap-6 gap-16">
          <div className="flex flex-col gap-16">
            <BagItemsSummary />
          </div>
          <div className="flex flex-col flex-1 items-center gap-4">
            <div className="sm:text-2xl text-lg">Estimated Total: {CURRENCY} {!!bagItems && bagItems.reduce((prev, curr, i) => {
              const newSum = (curr.qty * curr.product.price) + prev
              return newSum
            }, 0)}</div>
            {loggedInUser && <button onClick={() => prop.onNext()} className={`${buttonShadowEffect} w-full font-semibold shadow-[4px_4px_0px_0px_#B58396] hover:shadow-[2px_2px_0px_0px_#B58396] bg-[#C2ADB3] p-2 rounded-md`}>Start Checkout</button>}
            {loggedInUser === undefined && <div className="flex items-center justify-center gap-1.5 text-red-800 md:text-xl text-md"><span className="material-symbols-outlined">
              warning
            </span>
              <div className="text-center">Oops! Please Login to checkout</div></div>}
          </div>
        </div>
        }
      </div>
      <Footer />
    </div>
  )
}
