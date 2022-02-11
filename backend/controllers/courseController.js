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

module.exports = {
  createCourse,
  getAllCourses,
  updateCourse
};
