const userService = require('../service/user')

async function login(req, res){
    const result = await userService.login(req.body)
    res.status(200).json(result)
}

async function createUser(req, res){
    const result = await userService.createUser(req.body)
    res.status(200).json(result)
}

module.exports = {
    login, createUser
}