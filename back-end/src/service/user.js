const {User} = require('../database/models')
const md5 = require('md5')
const generateJWT = require('../util/generatejwt')
const { getUser, insertUser } = require('../models/user')

async function login({user, password}){
    const verify = await getUser(user)
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

async function createUser(data){
    const verify = await getUser(data.user)
    if (verify){
        throw new Error('409|Usuário já existente')
    }
    try {
        await insertUser({...data, password:md5(data.password)})
        return {message:'Cadastro efetuado com sucesso'}
    }catch(error){
        throw new Error(`500|${error.message}`)
    }
    
}
module.exports = {
    login, createUser
}