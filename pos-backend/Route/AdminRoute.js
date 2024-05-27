const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/AdminController');

router.post('/addAdmin', adminController.addAdmin);
router.get('/getAdmin', adminController.getAllAdmin);
router.delete('/deleteAdmin/:id', adminController.deleteAdmin); 
router.post('/login', adminController.login);
router.get('/countAdmin', adminController.countAdmin);
module.exports = router;


