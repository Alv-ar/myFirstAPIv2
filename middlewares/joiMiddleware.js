module.exports.validate = (schema, inputValidation/*sera lo que reciba por parametros*/) => {
    return (req, res, next) => {
        let objToValidate = {};//para que no pete si llega vacio
        /*
        if (inputValidation === `body`) objToValidate = req.body;
        else if (inputValidation ===`query`) objToValidate = req.query;
        else if (inputValidation ===`path`) objToValidate = req.params;
        */

        //TANTO EL IF ELSE COMO EL SWITCH CASE SIRVEN
        switch (inputValidation){
            case 'body':
                objToValidate = req.body;
                break;
            case 'params':
                objToValidate = req.params;
                break;
            case 'query':
                objToValidate = req.query;
                break;
            default:
                objToValidate = {};
                break;
        }

        const result = schema.validate(objToValidate);
        if (result.error) { //si result.error existe =>>
            const errorDetails = result.error.details.map((value) => value.message);
            const responseObj = {
                status: 400,
                body: errorDetails
            };
        res.status(responseObj.status).send(responseObj);
        } else {
            next();
        } 
    };
}; 