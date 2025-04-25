import connectToDb from '@/lib/database/db'
import Product from '@/lib/models/Product'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await connectToDb()
    const newArrivals = await Product.find()
    if (newArrivals) {
      return new NextResponse(JSON.parse(JSON.stringify(newArrivals)))
    } else {
      return new NextResponse('no new arrivals found')
    }
  } catch (error) {
    console.log(error)
  }
}
