import connectToDb from "@/lib/database/db";
import Product from "@/lib/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDb();
        const product= await Product.find();
        return new NextResponse(JSON.parse(JSON.stringify(product)))
    } catch (error) {
        console.log(error);
        
    }
}