const userService = require('../service/user')

async function login(req, res){
    const result = await userService.login(req.body)
    res.status(200).json(result)
}

module.export = {
    login
}