const mongoose = require('mongoose');

const remarqueSchema = mongoose.Schema({
  name: { type: String, required: true },
  Email: { type: String, required: true },
  Subject: { type: String, required: true },
  Description: { type: String, required: true },
  
});

module.exports = mongoose.model('remarques', remarqueSchema);