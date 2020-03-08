const Validator = require('validator');
const isEmpty = require('./is-empty')

module.exports = function validateRegisterInput(data) {
    let errors = {}

    data.name = isEmpty(data.name) ? data.name : ''
    data.email = isEmpty(data.email) ? data.email : ''
    data.password = isEmpty(data.password) ? data.password : ''
    data.password2 = isEmpty(data.password2) ? data.password2 : ''
    console.log(data)

    if (Validator.isEmpty(data.name)) {
        errors.name = 'name不能为空'
    } else if (!Validator.isLength(data.name, { min: 2, max: 8 })) {
        errors.name = 'name的长度不能小于2位且不能超过8位'
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'email不能为空'
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'email不合法'
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'password不能为空'
    } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'password的长度不能小于6位且不能超过30位'
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'password2不能为空'
    } else if (!Validator.isLength(data.password2, { min: 6, max: 30 })) {
        errors.password2 = 'password2的长度不能小于6位且不能超过30位'
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password = 'password2和data.password不一致'
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }

}