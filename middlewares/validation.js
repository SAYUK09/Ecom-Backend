const Joi = require('joi')

//signup validation

const signupValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  })

  return schema.validate(data)
}


const loginValidation = (data) => {
  const schema = Joi.object({

    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  })

  return schema.validate(data)
}

module.exports.signupValidation = signupValidation;

module.exports.loginValidation = loginValidation;