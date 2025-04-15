const AuthModel = require("../models/auth-model")
const bcrypt = require("bcrypt")
const { tokenGenerate } = require('../utils/token')

exports.signUpService = async (req, res) => {
    try {
        var { email, password } = req.body;

        const exists = await AuthModel.findOne({ email: email });

        if (exists) {
            res.status(400).json({ status: false, msg: "User already exist." });

        } else {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            password = hash

            const saveData = await AuthModel.create({ email: email, password: password });
            const token = await tokenGenerate(saveData);

            res.status(200).json({ status: true, msg: "User created successfully.", token: token });
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, msg: error, statusCode: 500 });
    }
}

exports.signInService = async (req, res) => {
    try {
        var { email, password } = req.body;

        const exists = await AuthModel.findOne({ email: email });

        if (exists) {
            const compare = await bcrypt.compare(password, exists.password);

            if (compare) {
                const token = await tokenGenerate(exists);
                res.status(200).json({ status: true, msg: "User login successfully.", token: token });

            } else {
                res.status(400).json({ status: false, msg: "Invalid password." });
            }

        } else {
            res.status(400).json({ status: false, msg: "User not found." });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, msg: error, statusCode: 500 });
    }
}