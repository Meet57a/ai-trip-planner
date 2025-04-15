const { verifyToken } = require('../utils/token');

exports.authCheck = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const splited = token.split(" ")[1];
        const user = verifyToken(splited);
        if (!user) {
            res.status(400).json({ status: false, msg: "Invalid token." });
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, msg: error, statusCode: 500 });
    }
}