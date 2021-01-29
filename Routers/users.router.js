const router = require('express').Router();
const controller = require('../controllers/users.controllers')
// import controller from '../controllers/users.controllers'
const {
    user
} = require('../middlewares/users.middleware')


router.get('/', controller.users)
router.get('/list', controller.list)
router.get('/signUp', controller.signUp)
router.get('/logIn', user, controller.logIn)
router.get('/describe', user, controller.describe)
router.get('/delete', user, controller.destroy)
router.get('/update', user, controller.update)


module.exports = router