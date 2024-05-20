const db = require("../Model/DbConnect");
const multer =require("multer")
const path = require("path")

const product = db.product;



const addProducts = async (req, res, next) => {
    try {
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }
        
        const filePath = req.file.path.replace(/\\/g, '/'); // Replace backslashes with forward slashes
        const fileName = filePath.split('/').pop(); // Extract the file name

        // Extract other form fields
        const { Product_Name, Product_Qty, Product_Price, Product_Description } = req.body;

        // Create new product with image path
        const newProduct = await product.create({
            Product_Name,
            Product_Qty,
            Product_Price,
            Product_Description,
            Product_Image: fileName
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
};



    //GET PRODUCT SECTION
    const getAllProduct =  async (req, res, next) => {
        try {
            const products = await product.findAll({});
            res.status(200).send(products);
        } catch (error) {
            next(error);
        }
    }
    //DELETE SECTION
    const deleteProduct = async (req, res, next) => {
        try {
            const productId = req.params.id;  // Extract ID from the URL parameters
            const deletedProduct = await product.destroy({
                where: {Product_id: productId }
            });
    
            if (deletedProduct) {
                res.status(200).send(`Product with ID ${productId} deleted successfully.`);
            } else {
                res.status(404).send(`Product with ID ${productId} not found.`);
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal server error.");
        }
    };
    
   

    //UPLOAD SECTION
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, '../pos-page/src/images')  //Store that image ///destination
            
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname)) //Name of the file type in the destination folder 
        }
    })

    const upload = multer({
        storage: storage,
        limits: { fileSize: '7000000'},
        fileFilter: (req, file, cb) => {
            const fileTypes = /jpeg|jpg|png/
            const mimeType = fileTypes.test(file.mimetype) //checks the file types and if okay it uplads
            const extname = fileTypes.test(path.extname(file.originalname)) //give actual files extension and if matching with file types checks if it actual like the mimetype 
    
            if(mimeType && extname){
                return cb(null, true)
            }
            cb('give proper file format to upload ')
        }
    }).single('Product_Image')


    

    
module.exports = {
    addProducts,
    getAllProduct,
    upload,
    deleteProduct


};
