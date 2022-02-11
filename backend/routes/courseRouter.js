const express = require('express');
const router = express.Router();
const {createCourse, getAllCourses,updateCourse} = require('../controllers/courseController')

router.post('/create',createCourse)
router.get('/getAll',getAllCourses)
router.patch('/update/:id',updateCourse)

module.exports = router;