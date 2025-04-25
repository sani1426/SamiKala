import { NextResponse } from 'next/server'
import connectToDb from '../database/db'
import Product from '../models/Product'

export const GetAllProduct = async () => {
  await connectToDb()

  try {
    await connectToDb()

    const Products = await Product.find()
    return JSON.parse(JSON.stringify(Products))
  } catch (error) {
    console.log(error)
    return new NextResponse('Server Error')
  }
}

export async function GetNewArrivals() {
  try {
    await connectToDb()
    const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(8)
    if (newArrivals) {
      return JSON.parse(JSON.stringify(newArrivals))
    } else {
      return 'no new arrivals found'
    }
  } catch (error) {
    console.log(error)
  }
}

export const GetBestSeller = async () => {
  try {
    await connectToDb()

    const bestSeller = await Product.findOne().sort({ rating: -1 })

    return JSON.parse(JSON.stringify(bestSeller))
  } catch (error) {
    console.log(error)
  }
}

export const GetSimilarProducts = async (productId : number) => {
  try {
    await connectToDb()

    const product  = await Product.findById(productId);

    if(product) {
        const similarProducts = await Product.find({gender : product.gender})
        .sort({ rating: -1 })
        .limit(4);
        return JSON.parse(JSON.stringify(similarProducts))
    }else{
        return "product not find"
    }

  } catch (error) {
    console.log(error)
  }
}
