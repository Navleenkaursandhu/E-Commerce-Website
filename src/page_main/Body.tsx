import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import { product } from '../models/product'
export const Body = () => {

  console.log(product.read())
  return (
    <div className='bg-[#F3EBF1]'>
      <div className="flex h-[44rem]">
        <div className="flex flex-1 flex-col justify-center pl-6">
          <div className='text-5xl py-4'>SUMMER COLLECTIONS</div>
          <div className='text-3xl'>Shop high quality T-shirts with perfect fit and comfort feel</div>
        </div>

        <div className="flex-1 relative">
          <img className='right-0 top-10 h-2/5 absolute rounded-md border-4 border-[#E5C5AE]' src={img2} />
          <img className='right-72 top-60 h-3/5 absolute rounded-md border-4 border-[#7D515E]' src={img1} />
          <img className='right-0 bottom-0 h-2/5 absolute rounded-md border-4 border-[#BDC59D]' src={img3} />
        </div>
      </div>

      <div className='flex justify-between px-6  py-16 items-center'>
        <div className='text-3xl'>Find Something Classy!</div>
        <div className='flex gap-10 text-lg items-center'>
          <div className='px-3 py-1 bg-[#F4DADB] rounded-md flex gap-2'>All Filters
            <span className="material-symbols-outlined">
              tune
            </span>
          </div>
          <div className='px-3 py-1 bg-[#F4DADB] rounded-md flex gap-2'>Sort By
            <select className='bg-[#F4DADB]'>
              <option value='price'>Price</option>
              <option value='lowest-price'>Lowest Price</option>
              <option value='highest-price'>Highest Price</option>
            </select>
          </div>
        </div>
      </div>

        <div className='flex flex-wrap px-6 gap-6 justify-evenly'>
          {product.read().map((obj, i) => {
            return <div key={obj.id} className='flex flex-col gap-2 w-[24rem]'>
              <img className='rounded-md' src={obj.image}></img>
              <div>{obj.name}</div>
              <div>{obj.currency} {obj.price.toFixed(2)}</div>
              {obj.hasFreeDelivery && <div className='bg-[#F4DADB] px-3 py-1 rounded-md w-1/2 text-center'>Free Delivery</div>
              }
            </div>
          })}
        </div>
    </div>
  )
}