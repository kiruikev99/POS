const db = require("../Model/DbConnect");
const multer = require("multer");

const user = db.user;

const addUser = async (req, res, next) => {
    try {

        // Extract other form fields
        const { User_FName, User_LName, User_Email, User_Security, User_Password  } = req.body;

        // Create new admin with image path
        const newUser = await user.create({
            User_FName, User_LName, User_Email, User_Security, User_Password
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
};

// GET ADMIN SECTION
const getUser = async (req, res, next) => {
    try {
        const users = await user.findAll({});
        res.status(200).send(users);
    } catch (error) {
        next(error);
    }
};

const countUser = async (req, res, next) => {
    try {
        const userCount = await user.count();
        res.status(200).json({ userCount});
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
};

// DELETE SECTION
const deleteUser = async (req, res, next) => {
    try {
        const userID = req.params.id; // Extract ID from the URL parameters
        const deletedUser = await user.destroy({
            where: { User_id: userID }
        });

        if (deletedUser) {
            res.status(200).send(`Admin with ID ${userID} deleted successfully.`);
        } else {
            res.status(404).send(`Admin with ID ${userID} not found.`);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
};


const login = async (req, res, next) => {

    try {
        const { User_Email, User_Password } = req.body;

        // Find admin by username
        const userRecord = await user.findOne({ where: { User_Email } });

        if (!userRecord) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        // Compare password directly (plain text comparison - not secure)
        if (User_Password !== userRecord.User_Email) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        // Successful login
        res.status(200).json({ message: "Login successful",  redirectUrl: "/Landing"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
    
}




module.exports = {
    addUser,
    deleteUser,
    getUser,
    countUser,
    login
};
