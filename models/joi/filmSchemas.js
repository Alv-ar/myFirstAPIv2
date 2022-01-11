const Joi = require("@hapi/joi");

Joi.objectId = require("joi-objectid")(Joi);


module.exports.selectFilmSchema = Joi.object({
    id: Joi.objectId().required(),
});

module.exports.createFilmSchema = Joi.object({
    title: Joi.string().alphanum().min(2).max(50).required(),
    sinopsis: Joi.string().min(2).max(120).required(),
    director: Joi.string().alphanum().min(2).max(20).required(),
    releasedDate: Joi.date().required(),
    actors: Joi.array().items(Joi.object({
        firstName: Joi.string().alphanum().min(3).max(20),
        lastName: Joi.string().alphanum().min(3).max(20)
    }))
});
