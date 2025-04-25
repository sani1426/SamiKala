import { NextResponse } from "next/server";
import connectToDb from "../database/db"
import Product from "../models/Product";



export const GetAllProduct = async ()=> {

    await connectToDb()

    try {
        await connectToDb()
        
            const Products = await Product.find()
            return  JSON.parse(JSON.stringify(Products)) 


    } catch (error) {
        console.log(error);
        return new NextResponse("Server Error")
        
    }
}

export async function GetNewArrivals(){

    try {
        await connectToDb();
        const newArrivals = await Product.find().sort({createdAt : -1}).limit(8)
        if(newArrivals) {
            return JSON.parse(JSON.stringify(newArrivals))
        }else{
          return "no new arrivals found"
        }
        

    } catch (error) {
        console.log(error);
        
    }
}



