const db = require('../models')


const createClass = async (req, res) => {
    try {
      const { name } = req.body;
  
      let classData = {
        name,
      };
      let json = await db.class.create(classData);
      res.status(200).json(json);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const getAllClasses = async (req, res) => {
    try {
      let json = await db.class.findAll({ where: {} });
      res.status(200).json(json);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  const updateClass = async (req, res) => {
    try {
      let classData = {
          name:req.body.name
  
         }
  
         await db.class.update(classData, {
             where: {
                 id: req.params.id
             }
         })
  
         res.status(200).json({message: 'Class updated sucessfully.'})
     } catch (err) {
      res.status(500).json({message: 'Class update failed'});
    }
  };
  
  
  const deleteClass = async (req, res) => {
    try {
        const classes = await db.class.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!classes) {
            return res.status(404).json({
                message: 'Class not found'
            });
        }
  
        await classes.destroy();
        res.status(200).json({
            message: 'Class deleted successfully'
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message || "Some error occurred while deleting the Class."
        });
    }
  }
  
  
  const deleteAllClasses = async (req, res) => {
    try {
        await db.class.destroy({
            where: {}
        });
  
        res.status(200).json({
            message: 'Classes deleted successfully'
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message || "Some error occurred while deleting the Classes."
        });
    }
  }
  

  module.exports = {
      createClass,
      getAllClasses,
      updateClass,
      deleteClass,
      deleteAllClasses
  }