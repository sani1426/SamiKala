import connectToDb from "@/lib/database/db";
import Product from "@/lib/models/Product";

export async function GET () {

    try {
        await connectToDb();
        const newArrivals = await Product.find();
        if(newArrivals) {
            return JSON.parse(JSON.stringify(newArrivals))
        }else{
          return "no new arrivals found"
        }
        

    } catch (error) {
        console.log(error);
        
    }
}