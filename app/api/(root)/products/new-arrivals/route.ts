import connectToDb from "@/lib/database/db";
import Product from "@/lib/models/Product";

export async function GET () {

    try {
        await connectToDb();
        const newArrivals = await Product.find().sort({ createdAt : -1}).limit(8)

        return JSON.parse(JSON.stringify(newArrivals))
        
    } catch (error) {
        console.log(error);
        
    }
}