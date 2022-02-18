const express = require('express');
const { createClass, getAllClasses, updateClass, deleteClass, deleteAllClasses } = require('../controllers/classController');
const router = express.Router();

router.post('/create',createClass);
router.get('/getAllClasses',getAllClasses);
router.patch('/update/:id',updateClass);
router.delete('/delete/:id',deleteClass);
router.delete('/deleteAllClasses/',deleteAllClasses);

module.exports = router;