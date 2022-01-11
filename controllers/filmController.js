const c = require("../config/constants");
const filmService = require("../services/filmService");

module.exports = {
    selectById: async (req, res) => {
        const response = {
            status: c.status.serverError,
            msg: "Internal server error",
        };
        try {
            const filmId = req.params.id;
            const resFromService = await userService.selectById(filmId);
            if (resFromService.status) {
                if (resFromService.result) {
                    response.status = c.status.ok;
                    response.msg = "Film found";
                    response.body = resFromService.result;
                } else {
                    response.status = c.status.notFound;
                    response.msg = "Film not found";
                }
            }
        } catch (err) {
            console.log("ERROR-userController-selectById: ", err);
            response.error = err;
        }
        res.status(response.status).send(response);
    },

    create: async (req, res) => {
        const response = {
            status: c.status.serverError,
            msg: "Internal server error",
        };
        try {
            const film = req.body;
            film.active = true;
            const resFromService = await filmService.create(film);
            if (resFromService.status) {
                response.status = c.status.created;
                response.msg = "Film created";
                response.body = resFromService.result;
            }
        } catch (err) {
            console.log("ERROR-filmController-create: ", err);
            response.error = err;
        }
        res.status(response.status).send(response);
    },
};
