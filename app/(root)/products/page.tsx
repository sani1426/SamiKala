"use client"

import {
  Pagination,
  PaginationContent,

  PaginationItem,
 
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


import ProductGrid from "@/components/shared/Products/ProductGrid"

import { GetPaginating } from "@/lib/actions/productActions"
import { ProductType } from "@/types/type"

import { useEffect, useState } from "react"
import Link from "next/link"




const Page =  () => {

  const [products , setProduct] = useState<ProductType[]>([])
  const [pageNumber , setPageNumber] = useState(1)

  useEffect(() => {
 const getData = async ()=>{

  const productelem:ProductType[] = await GetPaginating(pageNumber)

  setProduct(productelem)

 
 }
 getData()
  
  }, [pageNumber])
  
 
  return (
    <section className="pt-14 pb-24 px-8 md:px-12">
      <h1 className="text-4xl mb-12 font-bold text-center">All Products</h1>
      <ProductGrid  products={products} />

      <div className="mx-auto w-full my-8 flex flex-col items-center justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Link  className={`px-4 py-2 border flex items-center justify-center shadow-sm hover:shadow-lg text-xl  ${pageNumber <2 ? "opacity-50 cursor-not-allowed" : ""}`} href="#"  onClick={() => {
              if(pageNumber > 2){ setPageNumber(pageNumber -1)}
            }} >Previous</Link>
          </PaginationItem>
          <PaginationItem  >
            <Link href="#" className="px-4 py-2 border flex items-center justify-center shadow-sm hover:shadow-lg text-xl" onClick={()=>setPageNumber(1)}>
            1
            </Link>
          
          </PaginationItem>
          <PaginationItem  >
          <Link href="#" className="px-4 py-2 border flex items-center justify-center shadow-sm hover:shadow-lg text-xl"  onClick={()=>setPageNumber(2)}>
            2
            </Link>
          </PaginationItem>
          <PaginationItem  >
          <Link href="#" className="px-4 py-2 border flex items-center justify-center shadow-sm hover:shadow-lg text-xl"  onClick={()=>setPageNumber(3)}>
            3
            </Link>
          </PaginationItem>
          <PaginationItem  >
          <Link href="#" className="px-4 py-2 border flex items-center justify-center shadow-sm hover:shadow-lg text-xl"  onClick={()=>setPageNumber(4)}>
            4
            </Link>
          </PaginationItem>
          <PaginationItem>
            <Link
            className={`px-4 py-2 border flex items-center justify-center shadow-sm hover:shadow-lg text-xl  ${pageNumber >3 ? "opacity-50 cursor-not-allowed" : ""}`}
            href="#" onClick={() => {
              if(pageNumber < 3){ setPageNumber(pageNumber + 1)}
            }}>Next</Link>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      </div>
    </section>
  )
}

export default Page