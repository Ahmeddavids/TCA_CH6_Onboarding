const { signUp, verifyUser, resendVerification, login, forgotPassword, resetPassword, getAll, changePassword } = require('../controllers/userController');
const { authenticate } = require('../middlewares/authentication');
const { signUpValidator, loginValidator } = require('../middlewares/validator');

const router = require('express').Router();

router.post('/users', signUpValidator, signUp);

router.get('/users/verify/:token', verifyUser);

router.post('/users/resend-verification', resendVerification);

router.post('/users/login', loginValidator, login);

router.post('/users/forgot/password', forgotPassword);

router.post('/users/reset/password/:token', resetPassword);

router.get('/users', authenticate, getAll);

router.patch('/users/change/password', authenticate, changePassword);

module.exports = router;
