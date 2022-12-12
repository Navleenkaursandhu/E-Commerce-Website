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

export const PageProductDetails = () => {
  const params = useParams()
  const id = Number(params.id)
  const productObject = product.read().find((obj, i) => obj.id === id)
  const [sizeSelected, setSizeSelected] = useState('M')
  const [quantitySelected, setQuantitySelected] = useState('1')
  const [starIndex, setStarIndex] = useState(-1)
  const [reviewByLoggedInUser, setReviewByLoggedInUser] = useState('')

  // const loginData = useLiveQuery(async () => await db.loginSession.toArray())
  // console.log(!!loginData?.length && loginData[0].userId)

  console.log(reviewByLoggedInUser)

  const loggedInUserOrderHistoryData = useLoggedInUserOrderHistory()
  console.log(loggedInUserOrderHistoryData)

  const ordersWithProduct = loggedInUserOrderHistoryData?.filter((order, i) => order.products.filter((product, i) => product.productId === id).length > 0)

  const reviewData = useLiveQuery(async () => await db.reviews.toArray())

  const userLoginSessionData = useLoggedInUser()
  console.log(!!userLoginSessionData && userLoginSessionData.firstName)


  console.log(!!reviewData?.length && reviewData)

  return (
    <div className='text-[#7D515E] flex flex-col min-h-screen'>
      <Header />
      <div className="bg-[#F3EBF1] py-16 xl:px-32 lg:px-20 text-2xl flex-1">
        <div className="flex lg:flex-row flex-col items-center gap-16 xl:gap-32 lg:gap-20">
          <img className="w-[32rem] rounded-md sm:p-0 p-4" src={productObject.image}></img>

          <div className="flex flex-col md:w-3/5 sm:w-4/5 w-full gap-4 p-4">
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
              <div className="flex sm:gap-12 gap-2">
                {productObject.sizes.map((str, i) => <button className={` ${buttonShadowEffect} w-[2.5rem] rounded-md bg-[#F4DADB]`} onClick={() => setSizeSelected(str)} key={i}>{str}</button>)}
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
                onClick={() => db.bagItems.add({
                  productId: productObject.id,
                  size: sizeSelected,
                  qty: Number(quantitySelected)
                })}
              >
                Add To Bag<span className="material-symbols-outlined text-3xl ">
                  shopping_bag
                </span>
              </button>
            </div>

            <div className='text-lg'>*Return Policy: Returnable after 30 days of purchase</div>
          </div>
        </div>

        {!!ordersWithProduct?.length && <div className='flex flex-col gap-4'>
          <div className='mt-10'>
            <div>Please give us a star rating:</div>
            {new Array(5).fill(0).map((element, i) => <button key={i} onClick={() => setStarIndex(i)} className={i <= starIndex ? 'text-yellow-400' : ''}><span className="material-symbols-outlined">
              grade
            </span></button>)}
          </div>

          <div>What would you tell others about your experience?</div>
          <textarea className='p-4 h-[10rem]' onChange={(e) => setReviewByLoggedInUser(e.target.value)}></textarea>

          <button onClick={() => db.reviews.add({
            userId: ordersWithProduct[0].userId,
            productId: id,
            review: reviewByLoggedInUser,
            rating: starIndex + 1,
            timestamp: new Date().getTime(),
            userName: !!userLoginSessionData && userLoginSessionData.firstName,
          })} className={`${buttonShadowEffect} w-1/5 flex items-center justify-center gap-2 font-semibold shadow-[4px_4px_0px_0px_#c6838a9e] hover:shadow-[2px_2px_0px_0px_#c6838a9e] bg-[#F4DADB] p-2 rounded-md`}>Submit Review</button>
        </div>}

        {!ordersWithProduct?.length && <div className='mt-10 flex items-center gap-2'><span className="material-symbols-outlined">
          warning
        </span>Only logged in users who have purchased this product can add a review</div>}

        {!!reviewData?.length && <div className='mt-16'>
          <div className='flex flex-row gap-6'>
            <div className='border border-black'>
              CUSTOMER REVIEWS
            </div>
            <div className='flex flex-col flex-1 border border-black gap-10'>
              <div>
                <div className='text-center'>REVIEWS</div>
                <hr className='border-1 border-[#7D515E]'></hr>
              </div>
              {reviewData.map((reviewObj, i) => {
                return <div>
                  <div className='flex items-center gap-2'>
                    <span className="material-symbols-outlined">account_circle</span>
                    <div>{reviewObj.userName} </div>
                    <div>{new Date(reviewObj.timestamp).toLocaleString()}</div>
                  </div>
                  <div>{new Array(5).fill(0).map((element, i) => <button key={i} className={i < reviewObj.rating ? 'text-yellow-400' : ''}><span className="material-symbols-outlined cursor-default">
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