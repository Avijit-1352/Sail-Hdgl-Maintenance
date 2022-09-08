const express = require('express');
const { signupController,signinController,breakController } = require('../controllers/auth');
const { signupValidator,validationResult,signinValidator,breakValidator } = require('../middleware/validator');
const router = express.Router();

router.post('/signup', signupValidator,validationResult,signupController);
router.post('/signin', signinValidator,validationResult,signinController);
router.post('/breakdo', breakValidator,validationResult,breakController);


module.exports = router;