const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let doctorSchema = new Schema({
  name: {
    type: String
  },
  expertise: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  hospital: {
    type: String
  }
}, {
    collection: 'doctors'
  })

module.exports = mongoose.model('Doctor', doctorSchema)
