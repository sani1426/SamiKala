import  mongoose from "mongoose"
import dotenv  from "dotenv"

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI!;


let cached = (global as any).mongoose || {conn: null , promise : null}

 const connectToDb = async () => {

    if(cached.conn) return cached.conn ;
    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'evently',
        bufferCommands: false,
      })
    
      cached.conn = await cached.promise;
      console.log("mongo db connected");
    
      return cached.conn;
        }

      export default connectToDb