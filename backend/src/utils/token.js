const jwt = require("jsonwebtoken");

exports.tokenGenerate = async (user, expire = "1h") => { 
    return  jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: expire })
}

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}