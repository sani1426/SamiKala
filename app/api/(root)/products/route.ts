import connectToDb from "@/lib/database/db";
import Product from "@/lib/models/Product";

export async function GET() {
    try {
        await connectToDb();
        const product= await Product.find();
        return JSON.parse(JSON.stringify(product))
    } catch (error) {
        console.log(error);
        
    }
}