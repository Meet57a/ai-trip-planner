

exports.validateAuthForm = async (req, res,next) => {
    const { email, password } = req.body;
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


    if (!email || !password) {
        return res.status(400).json({ status: false, msg: 'All fields are required', statusCode: 400 });
    }
    if (password.length < 6) {
        return res.status(400).json({ status: false, msg: 'Password must be at least 6 characters', statusCode: 400 });
    } else if (!email.match(emailFormat) || !email.match('gmail.com')) {
        return res.status(400).json({ status: false, msg: 'Invalid email address', statusCode: 400 });
    }

    next();
}