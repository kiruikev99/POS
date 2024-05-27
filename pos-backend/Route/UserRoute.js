const express = require('express');
const router = express.Router();
const useController = require('../Controllers/UserController');

router.post('/addUser', useController.addUser);
router.get('/getUser', useController.getUser);
router.delete('/deleteUser/:id', useController.deleteUser); 
router.post('/login', useController.login);
router.get('/userCount', useController.countUser);

module.exports = router;


