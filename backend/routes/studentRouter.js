const express = require('express')
const router = express.Router()
const { createStudent, getAllStudents,updateStudent,deleteStudent, deleteAllStudent } = require('../controllers/studentController')

router.post('/create', createStudent)
router.get('/getAll', getAllStudents)
router.patch('/update/:id', updateStudent)
router.delete('/delete/:id', deleteStudent)
router.delete('/deleteAll', deleteAllStudent)

module.exports = router;