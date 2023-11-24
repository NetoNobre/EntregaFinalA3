const {User} = require('../database/models')
const md5 = require('md5')
const generateJWT = require('../util/generatejwt')

async function login({user, password}){
    const verify = await User.findOne({where:{user}})
    if (!verify){
        throw new Error('404|Esse usuário não existe')
    }
    if (md5(password).localeCompare(verify.password)){
        throw new Error('401|Senha incorreta')
    }
    const newUser = {
        ...verify,
        token: generateJWT(verify)
    }
    return newUser
}

module.export = {
    login
}