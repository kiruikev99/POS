const db = require("../Model/DbConnect");
const multer = require("multer");

const admin = db.admin;

const addAdmin = async (req, res, next) => {
    try {

        // Extract other form fields
        const { Admin_Name, Admin_Username, Admin_Security, Admin_Password } = req.body;

        // Create new admin with image path
        const newAdmin = await admin.create({
            Admin_Name, Admin_Username, Admin_Security, Admin_Password,
        });

        res.status(201).json(newAdmin);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
};

// GET ADMIN SECTION
const getAllAdmin = async (req, res, next) => {
    try {
        const admins = await admin.findAll({});
        res.status(200).send(admins);
    } catch (error) {
        next(error);
    }
};
const countAdmin = async (req, res, next) => {
    try {
        const countAdmin = await admin.count();
        res.status(200).json({ countAdmin});
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
};


// DELETE SECTION
const deleteAdmin = async (req, res, next) => {
    try {
        const adminID = req.params.id; // Extract ID from the URL parameters
        const deletedAdmin = await admin.destroy({
            where: { Admin_id: adminID }
        });

        if (deletedAdmin) {
            res.status(200).send(`Admin with ID ${adminID} deleted successfully.`);
        } else {
            res.status(404).send(`Admin with ID ${adminID} not found.`);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
};

// UPLOAD SECTION
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../pos-page/src/components/AdminSection'); // Store the image in the destination
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Name the file in the destination folder
    }
});


const login = async (req, res, next) => {

    try {
        const { Admin_Username, Admin_Password } = req.body;

        // Find admin by username
        const adminRecord = await admin.findOne({ where: { Admin_Username } });

        if (!adminRecord) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        // Compare password directly (plain text comparison - not secure)
        if (Admin_Password !== adminRecord.Admin_Password) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        // Successful login
        res.status(200).json({ message: "Login successful",  redirectUrl: "/adminPOS"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
    
};
const dd = async (req, res, next) => {
    try {
        const admins = await admin.findAll({});
        res.status(200).send(admins);
    } catch (error) {
        next(error);
    }
};




module.exports = {
    addAdmin,
    deleteAdmin,
    countAdmin,
    getAllAdmin,
    login
};
