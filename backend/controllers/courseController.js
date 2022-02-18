const db = require("../models");

const createCourse = async (req, res) => {
  try {
    const { name } = req.body;

    let courseData = {
      name,
    };
    let json = await db.course.create(courseData);
    res.status(200).json(json);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllCourses = async (req, res) => {
  try {
    let json = await db.course.findAll({ where: {} });
    res.status(200).json(json);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateCourse = async (req, res) => {
  try {
    let courseData = {
        name:req.body.name

       }

       await db.course.update(courseData, {
           where: {
               id: req.params.id
           }
       })

       res.status(200).json({message: 'Course updated sucessfully.'})
   } catch (err) {
    res.status(500).json({message: 'Course update failed'});
  }
};


const deleteCourse = async (req, res) => {
  try {
      const student = await db.course.findOne({
          where: {
              id: req.params.id
          }
      });
      if (!student) {
          return res.status(404).json({
              message: 'Course not found'
          });
      }

      await student.destroy();
      res.status(200).json({
          message: 'Course deleted successfully'
      });
  } catch (err) {
      return res.status(500).json({
          message: err.message || "Some error occurred while deleting the Course."
      });
  }
}


const deleteAllCourse = async (req, res) => {
  try {
      await db.course.destroy({
          where: {}
      });

      res.status(200).json({
          message: 'Coursew deleted successfully'
      });
  } catch (err) {
      return res.status(500).json({
          message: err.message || "Some error occurred while deleting the Courses."
      });
  }
}


module.exports = {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  deleteAllCourse
};
