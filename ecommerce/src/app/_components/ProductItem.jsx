import { List } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function ProductItem({product}) {
  return (
    <div className='p-1 hover:border hover:shadow-md rounded-lg border-teal-400 hover:cursor-pointer'>

        <Image src={product?.banner?.url}
        alt='banner-card'
        width={400}
        height={350}
        className='rounded-t-lg h-[170px] object-cover'
        />
        
        <div className='flex items-center justify-between p-3 bg-gray-50 rounded-b-lg'>
            <div className=''>
                <h2 className='text-[14px] font-bold line-clamp-1'>{product?.title}</h2>  {/* // line-clamp: more than line */}
                <h2 className='text-[11px] text-gray-400 flex gap-1 items-center'>
                    <List className='w-4 h-4'/> {product?.category}</h2>
            </div>
            <h2> {product?.price} </h2>
        </div>

    </div>
  )
}

export default ProductItem
