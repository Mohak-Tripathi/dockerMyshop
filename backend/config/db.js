import mongoose from "mongoose";

const connectDB = async() =>{
   try{
    const conn= await mongoose.connect(
        "mongodb+srv://Mohak_Tripathi:mohak1234@ecommerceprotipshop.kouma.mongodb.net/ProEcommerce?retryWrites=true&w=majority"
        // mongodb+srv://Mohak_Tripathi:<password>@ecommerceprotipshop.kouma.mongodb.net/
        // "mongodb://mongodb:27017/myappdb"
    )
    console.log(process.env.MONGODB_URI, "URI")
    console.log(`mongo connected: ${conn.connection.host} `)
   }
   catch(error){
    
       console.log(`Error123: ${error.message}`)
      process.exit(1)
     
   }
    
}


// mongoose.connect('mongodb://myshop-mongodb:27017/my-database', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

export default connectDB

