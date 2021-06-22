const mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
  full_name: String,
  phone_number: Number,
  address: String,
  birthdate: Date,
},{
  timestamps: true
});

const Contacts = mongoose.model('contacts', contactsSchema);
module.exports = Contacts;