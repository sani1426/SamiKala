import { NextResponse } from "next/server";
import connectToDb from "../database/db"
import Product from "../models/Product";


export const GetAllProduct = async ()=> {

    await connectToDb()

    try {

            const Products = await Product.find()
            return {data : JSON.parse(JSON.stringify(Products)) };


    } catch (error) {
        console.log(error);
        return new NextResponse("Server Error")
        
    }
}

export const GetNewArrival = async () => {

    await connectToDb()

    try {
        const newArrival = await Product.find({
            createdAt : -1
        })

    } catch (error) {
        console.log(error);
        return new NextResponse("Server Error")
    }
}


