const router = require('express').Router();
const { validateAuthForm } = require('../utils/validation');
const { signUpService } = require("../services/auth")


router.post('/sign-up', validateAuthForm, signUpService);

module.exports = router;
