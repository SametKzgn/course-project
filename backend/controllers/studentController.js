const db = require('../models');

const createStudent = async (req, res) => {
    try {

        const { name, age, classId } = req.body

        let studentData = {
            name,
            age,
            classId
        }
        let json = await db.Student.create(studentData)
        res.status(200).json(json)
    } catch (err) {
        res.status(500).json(err)
    }
}


const getAllStudents = async (req, res) => {
    try {
        const students = await db.Student.findAll({
            where :{}
        });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const updateStudent = async (req, res) => {

    try {
        const { name, age, classId } = req.body
        let studentData = {
         name,
         age,
         classId 
        }

        await db.Student.update(studentData, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({message: 'Student edited sucessfully.'})
    } catch (err) {
        res.json({message: err})
    }

}

const deleteStudent = async (req, res) => {
    try {
        const student = await db.Student.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!student) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        await student.destroy();
        res.status(200).json({
            message: 'Student deleted successfully'
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message || "Some error occurred while deleting the Student."
        });
    }
}


const deleteAllStudent = async (req, res) => {
    try {
        await db.Student.destroy({
            where: {}
        });

        res.status(200).json({
            message: 'Student deleted successfully'
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message || "Some error occurred while deleting the Student."
        });
    }
}



module.exports = {
    createStudent,
    getAllStudents,
    updateStudent,
    deleteStudent,
    deleteAllStudent
}