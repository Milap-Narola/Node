
const {Router}=require("express")
const { getAddProductPage, getProductsPage, createProduct, getProductsByUserId, getProducts } = require("../controllers/product.Controller")
const isAuth = require("../middleware/auth")
const { upload } = require("../controllers/userController")

const ProductRouter=Router()

// view section
ProductRouter.get("/create",isAuth,getAddProductPage)
ProductRouter.get("/",isAuth,getProductsPage)


// api 

ProductRouter.post("/",isAuth,upload.single("img"),createProduct)
ProductRouter.get("/all",isAuth,getProducts)
ProductRouter.get("/id",isAuth,getProductsByUserId)

module.exports =ProductRouter
