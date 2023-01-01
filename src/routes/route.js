const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")


router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)
router.get('/cowincenter', userController.getByPin)



module.exports = router
