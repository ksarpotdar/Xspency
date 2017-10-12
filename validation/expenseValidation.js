var Joi = require('joi');

module.exports = {
 body: {
     expName: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
      date: Joi.string().regex(/[0-9]{3,30}/).required(),
      duration: Joi.string().regex(/[0-9]{3,30}/).required(),
      type: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
      amount: Joi.string().regex(/[0-9]{3,30}/).required(),
  EmployeeId: Joi.string().regex(/[0-9]{3,30}/).required(),
  //approval: Joi.boolean().required(),
  //id: Joi.number().required()
 }
};
