import mongoose from 'mongoose';


const MONGODB_URL = process.env.MONGODB_URL

if (!MONGO_URL) {
    throw new error(
        'Please define the MONGO_URL environment vatiable inside .env.local'
    )
}


let cached = global.mongoose;

if(!cached) {
    cached = global.mongoose = { conn:null , promise: null}
}

async function dbConnect() {
    if(cached.conn) {
        return cached.conn
    }

if(!cached.promise) {
    const opts = {
        bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) =>{
        return mongoose
    })
}

cached.conn = await cached.promise;
return cached.conn;

}


export default dbConnect;