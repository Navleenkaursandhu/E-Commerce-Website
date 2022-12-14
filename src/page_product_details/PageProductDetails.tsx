import { buttonShadowEffect } from '../common/tailwind_constants'
import { useParams } from "react-router-dom";
import { CURRENCY, product } from '../models/product'
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { useState } from 'react';
import { db } from '../db';
import { useLiveQuery } from 'dexie-react-hooks';
import { useLoggedInUserOrderHistory } from '../hooks/use_logged_in_user_order_history';
import { useLoggedInUser } from '../hooks/use_logged_in_user';
import { format } from 'date-fns';

export const PageProductDetails = () => {
  const params = useParams()
  const id = Number(params.id)
  const productObject = product.read().find((obj, i) => obj.id === id)
  const [sizeSelected, setSizeSelected] = useState('M')
  const [quantitySelected, setQuantitySelected] = useState('1')
  const [starIndex, setStarIndex] = useState(-1)
  const [reviewByLoggedInUser, setReviewByLoggedInUser] = useState('')
  const [sizeButtonClicked, setSizeButtonClicked] = useState(-1)

  const loggedInUserOrderHistoryData = useLoggedInUserOrderHistory()
  const ordersWithProduct = loggedInUserOrderHistoryData?.filter((order, i) => order.products.filter((product, i) => product.productId === id).length > 0)
  const reviewData = useLiveQuery(async () => await db.reviews.where({ productId: id }).toArray())
  const userLoginSessionData = useLoggedInUser()
  const averageStars = !!reviewData?.length && reviewData.reduce((prevReviewObj, currReviewObj, i) => prevReviewObj + currReviewObj.rating, 0) / reviewData.length

  const bagItems = useLiveQuery(() => db.bagItems.toArray())
  const totalItems = bagItems?.reduce((prev, curr, i) => prev + curr.qty, 0)

  return (
    <div className='text-[#7D515E] flex flex-col min-h-screen'>
      <Header />
      <div className="bg-[#F3EBF1] py-16 xl:px-32 lg:px-20 flex-1 lg:text-2xl md:text-xl text-lg">
        <div className="flex lg:flex-row flex-col items-center gap-16 xl:gap-32 lg:gap-20">
          <img className="w-[32rem] rounded-md sm:p-0 p-4" src={productObject.image}></img>

          <div className="flex flex-col md:w-3/5 sm:w-4/5 w-full gap-4 p-2">
            <div>
              <div className="text-3xl font-semibold">{productObject.name}</div>
              <hr className="border-1 border-[#7D515E]"></hr>
              <div>{productObject.description}</div>
            </div>
            <div>{CURRENCY} {productObject.price}</div>

            <div className="flex gap-6">
              <div>Color: </div>
              <div>{productObject.color}</div>
            </div>

            <div className="flex gap-6">
              <div>Sizes: </div>
              <div className="flex sm:gap-6 gap-2">
                {productObject.sizes.map((str, i) => <button key={i} className={` ${buttonShadowEffect} ${sizeButtonClicked === i ? 'bg-white' : 'bg-[#F4DADB]'} w-[2.5rem] rounded-md bg-[#F4DADB]`}
                  onClick={() => {
                    setSizeSelected(str)
                    setSizeButtonClicked(i)
                  }}>
                  {str}
                </button>)}
              </div>
            </div>

            <div className="flex gap-6">
              <div>Quantity:</div>
              <select value={quantitySelected} onChange={(e) => setQuantitySelected(e.target.value)} className="rounded-md px-1.5">
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>
            </div>

            <div className='pt-10'>
              <button
                className={`${buttonShadowEffect} flex items-center justify-center gap-2 w-full font-semibold shadow-[4px_4px_0px_0px_#c6838a9e] hover:shadow-[2px_2px_0px_0px_#c6838a9e] bg-[#F4DADB] p-2 rounded-md`}
                onClick={() => 
                  db.bagItems.add({
                  productId: productObject.id,
                  size: sizeSelected,
                  qty: Number(quantitySelected)
                })
              }
              >
                Add To Bag<span className="material-symbols-outlined text-3xl ">
                  shopping_bag
                </span>
              </button>
            </div>

            <div className='text-lg'>*Return Policy: Returnable after 30 days of purchase</div>

            <div className='mt-6 flex flex-col gap-2'>
              <div>{totalItems} {totalItems === 1 ? 'Item' : 'Items'} in Bag </div>
              <a href='/start-checkout'>
                <div className={`${buttonShadowEffect} flex items-center justify-center gap-2 w-full font-semibold shadow-[4px_4px_0px_0px_#c6838a9e] hover:shadow-[2px_2px_0px_0px_#c6838a9e] bg-[#F4DADB] p-2 rounded-md`}> Proceed to Checkout</div>
              </a>
            </div>
          </div>
        </div>

        {!!ordersWithProduct?.length && <div className='flex flex-col gap-4 p-2'>
          <div className='mt-10'>
            <div className='text-center border border-b-[#7D515E]'>RATE US</div>
            <div className='mt-2'>Please give us a star rating:</div>
            {new Array(5).fill(0).map((element, i) => <button key={i} onClick={() => setStarIndex(i)} className={i <= starIndex ? 'text-yellow-400' : 'text-[#a3838ea3]'}><span className="material-symbols-outlined">
              grade
            </span></button>)}
          </div>

          <div>What would you tell others about your experience?</div>
          <textarea className='p-4 h-[10rem]' onChange={(e) => setReviewByLoggedInUser(e.target.value)} value={reviewByLoggedInUser}></textarea>

          <button onClick={() => {
            db.reviews.add({
              userId: ordersWithProduct[0].userId,
              productId: id,
              review: reviewByLoggedInUser,
              rating: starIndex + 1,
              timestamp: new Date().getTime(),
              userName: !!userLoginSessionData && userLoginSessionData.firstName,
            })

            setReviewByLoggedInUser('')
            setStarIndex(-1)
          }
          } className={`${buttonShadowEffect} lg:w-1/5 md:w-2/5 sm:w-1/2 flex items-center justify-center gap-2 font-semibold shadow-[4px_4px_0px_0px_#c6838a9e] hover:shadow-[2px_2px_0px_0px_#c6838a9e] bg-[#F4DADB] p-2 rounded-md`}>Submit Review</button>
        </div>}

        {!ordersWithProduct?.length && <div className='mt-10 flex items-center gap-2'><span className="material-symbols-outlined">
          warning
        </span>Only logged in users who have purchased this product can add a review</div>}

        {!!ordersWithProduct?.length && !!reviewData?.length && <div className='mt-16 p-2'>
          <div className='text-center border border-b-[#7D515E] mb-6'>CUSTOMER REVIEWS</div>
          <div className='flex md:flex-row flex-col gap-6'>
            <div className='px-2'>
              <div>{!!reviewData?.length && reviewData.length} {reviewData.length === 1 ? 'Review' : 'Reviews'}</div>
              <div className='mt-4'>{new Array(5).fill(0).map((element, i) => <button key={i} className={i < Math.floor(averageStars) ? 'text-yellow-400' : 'text-[#a3838ea3]'}><span className="material-symbols-outlined cursor-none">
                grade
              </span></button>)}</div>
              <div> {averageStars.toFixed(1)} out of 5</div>
            </div>
            <div className='flex flex-col flex-1 gap-10 rounded-md'>
              {reviewData.map((reviewObj, i) => {
                return <div className='bg-[#F4DADB] p-4 rounded-md' key={i}>
                  <div className='flex flex-col'>
                    <div className='flex items-center gap-3.5'><span className="material-symbols-outlined md:text-4xl">account_circle</span>{reviewObj.userName} </div>
                    <div className='sm:text-[16px] text-[12px]'>{format(new Date(reviewObj.timestamp),  "d MMMM yyyy")}</div>
                  </div>
                  <div>{new Array(5).fill(0).map((element, i) => <button key={i} className={i < reviewObj.rating ? 'text-yellow-400' : 'text-[#a3838ea3]'}><span className="material-symbols-outlined cursor-none">
                    grade
                  </span></button>)}</div>
                  <div>{reviewObj.review}</div>
                </div>
              })}
            </div>
          </div>
        </div>}
      </div>
      <Footer />
    </div>
  )
}
