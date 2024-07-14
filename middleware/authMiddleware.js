const jwt = require('jsonwebtoken')
const HttpError = require('../models/errorModel')


const authMiddleware = async (req, res, next) => {
    const Authorization = req.headers.Authorization || req.headers.authorization;
    if (Authorization && Authorization.startsWith("Bearer")) {
        const token = Authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (error, info) => {
            if (error) {
                return next(new HttpError("Unauthorized and Invalid User !", 403))
            }
            req.user = info;
            next();

        })
    } else {
        return next(new HttpError("Unauthorized No Token", 402))
    }
}

module.exports = authMiddleware;