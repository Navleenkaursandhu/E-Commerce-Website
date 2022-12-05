import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import { CURRENCY, product } from '../models/product'
export const Body = () => {

  return (
    <div className='bg-[#F3EBF1]'>
      <div className="flex md:h-[44rem] sm:h-[30rem] h-[18rem]">
        <div className="flex flex-1 flex-col lg:justify-center md:gap-6 sm:gap-32 gap-8 sm:pt-12 sm:pl-4 pt-6 pl-2">
          <div className='xl:text-5xl md:text-4xl sm:text-3xl text-lg font-medium'>SUMMER COLLECTIONS</div>
          <div className='xl:text-4xl md:text-3xl sm:text-2xl text-sm md:w-full xl:w-full lg:w-4/5 w-3/5 md:text-start text-center'>Shop high quality T-shirts with perfect fit and comfort feel</div>
        </div>

        <div className="flex-1 relative">
          <img className='right-0 sm:top-10 sm:h-2/5 top-6 h-2/5 absolute rounded-md sm:border-4 border-2 border-[#E5C5AE]' src={img2} />
          <img className='md:right-72 md:top-60 md:h-3/5 sm:right-48 sm:top-40 sm:h-1/2 right-20 top-28 h-1/2 absolute rounded-md sm:border-4 border-2 border-[#7D515E]' src={img1} />
          <img className='right-0 bottom-0 sm:h-2/5 h-2/5 absolute rounded-md sm:border-4 border-2 border-[#BDC59D]' src={img3} />
        </div>
      </div>

      <div className='flex md:justify-between justify-evenly flex-wrap px-6 pt-16 items-center md:gap-0 gap-12'>
        <div className='xl:text-3xl lg:text-2xl text-lg font-medium'>Find Something Classy!</div>
        <div className='flex sm:gap-10 gap-4 items-center sm:text-lg text-sm'>
          <div className='px-3 py-1 bg-[#F4DADB] rounded-md flex flex-row items-center gap-2'>Filter
            <span className="material-symbols-outlined sm:text-xl text-sm">
              tune
            </span>
          </div>
          <div className='px-3 py-1 bg-[#F4DADB] rounded-md flex sm:gap-2 gap-0.5'>Sort By
            <select className='bg-[#F4DADB]'>
              <option value='price'>Price</option>
              <option value='lowest-price'>Lowest</option>
              <option value='highest-price'>Highest</option>
            </select>
          </div>
        </div>
      </div>

        <div className='flex flex-wrap px-6 py-16 gap-10 justify-evenly'>
          {product.read().map((obj, i) => {
            return <a href={`/product-details/${obj.id}`} key={obj.id} className='flex flex-col gap-1.5 md:[24rem] sm:w-[16rem] w-[9rem]'>
              <img className='rounded-md' src={obj.image}></img>
              <div>{obj.name}</div>
              <div>{CURRENCY} {obj.price.toFixed(2)}</div>
              {obj.hasFreeDelivery && <div className='bg-[#F4DADB] sm:px-3 sm:py-1 p-1 rounded-md sm:w-1/2 w-full text-center'>Free Delivery</div>
              }
            </a>
          })}
        </div>
    </div>
  )
}