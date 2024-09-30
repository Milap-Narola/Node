const {Router}=require("express")
const { getAddProductPage, getProductsPage, createProduct, getProductsByUserId, getProducts } = require("../controllers/product.controller")
const { upload } = require("../controllers/user.controller")

const ProductRouter=Router()

// view section
ProductRouter.get("/create",getAddProductPage)
ProductRouter.get("/",getProductsPage)


// api 

ProductRouter.post("/",upload.single("img"),createProduct)
ProductRouter.get("/all",getProducts)
ProductRouter.get("/id",getProductsByUserId)

module.exports =ProductRouter