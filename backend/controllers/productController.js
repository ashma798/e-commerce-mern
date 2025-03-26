const bcrypt= require("bcrypt");
const jwt = require('jsonwebtoken');
const ProductModel = require("../models/ProductModel");
const multer = require('multer');
const path = require('path');

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, './uploads');  
        },
        filename: (req, file, cb) => {
          cb(null, Date.now() + path.extname(file.originalname));  
        }
      });
      
      const upload = multer({ storage: storage });

    addProduct = (req, res) => {
        try {
            const { name,brand,description,volume,price } = req.body;
            const image = req.file ? req.file.filename : null; 
            console.log("req:",req.body);

            if (name && price && volume) {
                const newProduct = new ProductModel({
                    name,
                    brand,
                    description,
                    volume,
                    image, 
                    price
                
                });
                newProduct.save()
                    .then((response) => {
                        console.log("response: ", response);

                        return res.status(201).json({
                            success: true,
                            statusCode: 201,
                            message: "Product added successfully",
                        });
                    })
                    .catch((error) => {
                        console.log("error: ", error);

                        return res.status(400).json({
                            success: false,
                            statusCode: 400,
                            message: "Product adding failed"
                        });
                    })
            } else {
                return res.status(200).json({
                    success: false,
                    statusCode: 400,
                    message: "Missing required fields"
                });
            }

        } catch (err) {
            console.error('Error adding product:', err);
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error"
            });
        }
        module.exports = {
            upload,        
            addProduct      
          };
        },
   
    getProducts=  async (req, res) => {
        try {
            const products = await ProductModel.find({ isDeleted: false });

            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Products retrieved successfully",
                count: products.length,
                data: products
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error"
            })
        }
    },
    
    updateProduct = (req, res) => {
        try {
            console.log("reqBody: ", req.body);

            const productIndex = products.findIndex((product) => product._id === req.body.productId);
            if (productIndex === -1) {
                return res.status(200).json({
                    success: false,
                    statusCode: 404,
                    message: "Product not found"
                });
            } else {
                products[productIndex] = req.body.updatedData;

                res.status(200).json({
                    success: true,
                    statusCode: 200,
                    message: "Product updated successfully",
                    data: products[productIndex]
                });
            }

        } catch (e) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error"
            });
        }
    }
    module.exports = { addProduct, getProducts,updateProduct };