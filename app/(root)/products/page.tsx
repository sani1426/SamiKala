"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
 
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


import ProductGrid from "@/components/shared/Products/ProductGrid"
import PageHandling from "@/components/shared/pagination"
import { GetPaginating } from "@/lib/actions/productActions"
import { ProductType } from "@/types/type"
import { Metadata } from "next"
import { useEffect, useState } from "react"


export const metadata: Metadata = {
  title: "products"
}

const Page =  () => {

  const [products , setProduct] = useState<ProductType[]>([])
  const [pageNumber , setPageNumber] = useState(1)

  useEffect(() => {
 const getData = async ()=>{

  const productelem:ProductType[] = await GetPaginating(pageNumber)

  setProduct(productelem)

  getData()
 }
  

  }, [pageNumber])
  
 
  return (
    <section className="pt-14 pb-24 px-8 md:px-12">
      <h1 className="text-4xl mb-12 font-bold text-center">All Products</h1>
      <ProductGrid  products={products} />

      <div className="mx-auto w-full my-8 flex flex-col items-center justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#"  onClick={()=>setPageNumber(pageNumber - 1)} />
          </PaginationItem>
          <PaginationItem className="cursor-pointer hover:shadow-lg" onClick={()=>setPageNumber(1)}>
           1
          </PaginationItem>
          <PaginationItem className="cursor-pointer hover:shadow-lg" onClick={()=>setPageNumber(2)}>
           2
          </PaginationItem>
          <PaginationItem className="cursor-pointer hover:shadow-lg" onClick={()=>setPageNumber(3)}>
           3
          </PaginationItem>
          <PaginationItem className="cursor-pointer hover:shadow-lg" onClick={()=>setPageNumber(4)}>
           4
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={()=>setPageNumber(pageNumber + 1)}/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      </div>
    </section>
  )
}

export default Page