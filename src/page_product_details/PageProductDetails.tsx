import { buttonShadowEffect } from '../common/tailwind_constants'
import { useParams } from "react-router-dom";
import { product } from '../models/product'
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { useState } from 'react';

export const PageProductDetails = () => {
  const params = useParams()
  const id = Number(params.id)
  const productObject = product.read().find((obj, i) => obj.id === id)
  const [sizeSelected, setSizeSelected] = useState('')
  const [quantitySelected, setQuantitySelected] = useState('1')

  console.log(sizeSelected)
  console.log(quantitySelected)

  return (
    <div className='text-[#7D515E]'>
      <Header />
      <div className="bg-[#F3EBF1] h-screen py-16 px-32  text-2xl">
        <div className="flex gap-32">
          <img className="w-[32rem] rounded-md" src={productObject.image}></img>

          <div className="flex flex-col w-1/2 gap-4">
            <div>
              <div className="text-3xl font-semibold">{productObject.name}</div>
              <div className="h-0.5 bg-[#7D515E]"></div>
              <div>{productObject.description}</div>
            </div>

            <div>{productObject.currency} {productObject.price}</div>

            <div className="flex gap-6">
              <div>Color: </div>
              <div>{productObject.color}</div>
            </div>

            <div className="flex gap-6">
              <div>Sizes: </div>
              <div className="flex gap-12">
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
              <a >
                <button className={`${buttonShadowEffect} w-full font-semibold shadow-[4px_4px_0px_0px_#c6838a9e] hover:shadow-[2px_2px_0px_0px_#c6838a9e] bg-[#F4DADB] p-2 rounded-md`}>Add To Bag</button>
              </a>
            </div>

            <div className='text-lg'>*Return Policy: Returnable after 30 days of purchase</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}