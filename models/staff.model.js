const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StaffSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  age: { type: Number, required: true },
});

// Export the model
module.exports = mongoose.model('Staff', StaffSchema);