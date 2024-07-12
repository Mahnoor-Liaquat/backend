const getAllProducts = async (req, res) =>  {
    res.status(200).json({msg:"I am getting All products"});
}

const getAllProductsTesting = async(req, res) =>{
    res.status(200).json({msg:"I am testing all Product"})
}

module.exports = {getAllProducts, getAllProductsTesting};