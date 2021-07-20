let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

  let doctorSchema = require('../models/Doctor');

  // CREATE Student
router.route('/add').post((req, res, next) => {
  doctorSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });
  
  // READ Students
  router.route('/').get((req, res) => {
    doctorSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
/* 
  //View Single Data
  router.route('/:id').get((req, res) => {
    doctorSchema.findById(req.params.id,(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }) */
  
  // Get Single Student
  router.route('/edit/:id').get((req, res) => {
    doctorSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  // Update Student
router.route('/update/:id').put((req, res, next) => {
  doctorSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})
  
  // Delete Student
  router.route('/delete/:id').delete((req, res, next) => {
    doctorSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  
  module.exports = router;