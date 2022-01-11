const mongoose = require("mongoose");
const Film = require("../models/db/filmModel");
const repository = require("../database/repository");

module.exports.selectById = async (filmId) => {
    const response = { status: false };
    try {
        const data = {
            _id: mongoose.Types.ObjectId(filmId),
            model: Film,
            projection: {},
        };
        const resFromRepo = await repository.selectById(data);
        if (resFromRepo.status) {
            response.result = resFromRepo.result;
            response.status = true;
        }
    } catch (err) {
        console.log("ERROR-userService-selectById: ", err);
    }
    return response;
};

module.exports.create = async (filmFromController) => {
    const response = { status: false };
    try {
        const film = new Film(filmFromController);
        const resFromRepo = await repository.create(film);
        if (resFromRepo.status) {
            response.result = resFromRepo.result;
            response.status = true;
        }
    } catch (err) {
        console.log("ERROR-filmService-create: ", err);
    }
    return response;
};
