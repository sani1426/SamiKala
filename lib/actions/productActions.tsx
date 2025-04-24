import { NextResponse } from "next/server";
import connectToDb from "../database/db"
import Product from "../models/Product";
import { ProductType } from "@/types/type";


export const GetAllProduct = async ()=> {

    await connectToDb()

    try {

            const Products = await Product.find()
            return  JSON.parse(JSON.stringify(Products)) 


    } catch (error) {
        console.log(error);
        return new NextResponse("Server Error")
        
    }
}




