import Image from 'next/image'
import React from 'react'

function ProductBanner({product}) {
  return (
    <div>
        <Image
            src={product?.banner?.url}
            alt='product-details-banner'
            width={400}
            height={350}
        />
    </div>
  )
}

export default ProductBanner