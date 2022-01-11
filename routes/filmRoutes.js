const express = require("express");
const router = express.Router();

const filmController = require("../controllers/filmController");
const joiMiddleware = require("../middlewares/joiMiddleware");
const filmSchemas = require("../models/joi/filmSchemas");

router.get(
    "/details/:id",
    joiMiddleware.validate(filmSchemas.selectFilmSchema, "params"),
    filmController.selectById
);

module.exports = router;
