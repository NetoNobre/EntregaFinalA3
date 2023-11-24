const router = require('express').Router()
const userController = require('../controller/user')

router.post('/create', userController.createUser)
router.post('/login', userController.login)

module.exports = router
    
