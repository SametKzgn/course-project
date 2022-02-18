const express = require('express');
const router = express.Router();
const {createCourse, getAllCourses,updateCourse, deleteCourse, deleteAllCourse} = require('../controllers/courseController')

router.post('/create',createCourse)
router.get('/getAll',getAllCourses)
router.patch('/update/:id',updateCourse)
router.delete('/delete/:id',deleteCourse)
router.delete('/deleteAll',deleteAllCourse)

module.exports = router;