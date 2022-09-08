const {check,validationResult} = require('express-validator')

exports.signupValidator=[
    check('username').not().isEmpty().trim().withMessage('All fields require'),
    // check('email').isEmail().normalizeEmail().withMessage('Invalid email'),
    check('userid').not().isEmpty().trim().withMessage('All fields require'),
    check('password').isLength({ min: 6 }).withMessage('password must be at least 6 characters long'),
    check('role').not().isEmpty().trim().withMessage('All fields require')
]
exports.breakValidator=[
    check('username').not().isEmpty().trim().withMessage('All fields require'),
    check('equipment').not().isEmpty().trim().withMessage('All fields require'),
    check('remark').not().isEmpty().trim().withMessage('All fields require')
]
exports.signinValidator=[
    check('userid').not().isEmpty().trim().withMessage('Invalid userid'),
    // check('email').isEmail().normalizeEmail().withMessage('Invalid email'),
    check('password').isLength({ min: 6 }).withMessage('password must be at least 6 characters long')
]
exports.validationResult=(req,res,next)=>{
    const result = validationResult(req);
    const hasError =!result.isEmpty();
    if (hasError) {
        const firstError = result.array()[0].msg;
        return res.status(400).json({
            errorMessage: firstError,
        })
        // console.log('hasErrors:',hasError);
        // console.log('result:',result);
    }
    next();
}