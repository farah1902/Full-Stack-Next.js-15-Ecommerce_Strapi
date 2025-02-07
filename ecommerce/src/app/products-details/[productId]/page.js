"use client";

import ProductApis from "@/app/_utils/ProductApis";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import BreadCrumb from "@/app/_components/BreadCrumb";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";

function ProductDetails() {
   const params = useParams(); // ✅ Correct way to get params in Next.js 15

   const [ ProductDetails, setProductDetails] = useState({})

   useEffect(() => {
    console.log("Product ID from URL:", params?.productId); // ✅ Log the extracted ID
  
    if (params?.productId) {
      getProductById_();
    }
  }, [params?.productId]);
  


  const getProductById_ = async () => {
    try {
      const response = await ProductApis.getLatestProducts();
      const products = response.data.data;
  
      console.log("Real IDs from Strapi:", products.map(p => p.id));
  
      // Fetch product using the correct ID
      const productResponse = await ProductApis.getProductById(matchedProduct.id);
      console.log("Product details:", productResponse.data.data);
      setProductDetails(productResponse.data.data)
  
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };
  



 return (

  <div className="px-10 py-8 md:px-28">
    <BreadCrumb/>
    
    <div className="mt-10 flex flex-col md:flex-row justify-around">

      <ProductBanner product={ProductDetails}/>
      <ProductInfo/>

    </div>


  </div>

 )
}

export default ProductDetails;
