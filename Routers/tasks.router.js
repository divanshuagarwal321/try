const router = require('express').Router();
const controller = require('../controllers/tasks.controller')

router.get('/', controller.tasks);
router.get('/add', controller.add);
router.get('/list', controller.list);
router.get('/markComplete', controller.markComplete);
router.get('/update', controller.update);
router.get('/describe', controller.describe);
router.get('/delete', controller.destroy);
router.get('/listOnlyRemaining', controller.listOnlyRemaining);


module.exports = router;