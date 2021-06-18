const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('Main page of app'));
router.post('/user', controllers.createUser);
router.get('/users', controllers.getAllUsers);
router.get('/user/:id', controllers.getUserById);
router.put('/user/:id', controllers.updateUser);
router.delete('/user/:id', controllers.deleteUser);


module.exports = router;