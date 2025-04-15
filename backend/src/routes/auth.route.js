const router = require('express').Router();
const { validateAuthForm } = require('../utils/validation');
const { signUpService, signInService } = require("../services/auth")


router.post('/sign-up', validateAuthForm, signUpService);
router.post('/sign-in', validateAuthForm, signInService);   

module.exports = router;
