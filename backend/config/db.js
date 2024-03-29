import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI_CLIENT,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })

        console.log(`Mongodb Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error:${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB