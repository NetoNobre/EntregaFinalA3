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
        id:verify.id,
        firstName:verify.firstName,
        lastName:verify.lastName,
        password:verify.password,
        email:verify.email,
        user:verify.user,
        token: generateJWT(verify)
    }
    return newUser
}

module.exports = {
    login
}