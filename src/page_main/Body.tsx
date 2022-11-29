import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
export const Body = () => {
  return (
    <div className="flex h-[44rem]">
      <div className="flex-1 border-2 border-black">
        <div>SUMMER COLLECTIONS</div>
        <div>Shop high quality T-shirts with perfect fit and comfort feel</div>
        <div>hello</div>
      </div>

      <div className="flex-1 border-2 border-black relative">
        <img className='right-0 top-10 h-2/5 absolute rounded-md' src={img2}/>
        <img className='left-48 top-60 h-1/2 absolute rounded-md' src={img1}/>
        <img className='right-0 bottom-0 h-2/5 absolute rounded-md' src={img3}/>

      </div>
    </div>
  )
}