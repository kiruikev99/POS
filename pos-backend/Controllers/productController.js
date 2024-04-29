const db = require("../Model/DbConnect");

const product = db.product;

module.exports = {
    addProducts: async (req, res, next) => {
        try {
            if (!req.body || !req.body.Product_Name || !req.body.Product_Qty || !req.body.Product_Price || !req.body.Product_Description) {
                return res.status(400).send("Missing required fields in request body.");
            }
            
            let info = {
                Product_Name: req.body.Product_Name,
                Product_Qty: req.body.Product_Qty,
                Product_Price: req.body.Product_Price,
                Product_Description: req.body.Product_Description,
            };

            const addProduct = await product.create(info);
            res.status(200).send(addProduct);
        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    getAllProduct: async (req, res, next) => {
        try {
            const products = await product.findAll({});
            res.status(200).send(products);
        } catch (error) {
            next(error);
        }
    }
};
