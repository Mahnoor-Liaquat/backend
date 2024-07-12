require("dotenv").config();

const connectDb = require("./db/connect");
const Product = require("./models/product");
// json k file ko import export nahi krte a directly use krte hai
const ProductJson = require("./products.json"); 

const start = async () =>{
    try{
        await connectDb(process.env.MONGO);
        await Product.create(ProductJson);
        console.log("success");

    }catch(error){
        console.log(error);
    }
};

start();
