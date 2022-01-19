const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
    first_name: { type: 'string', required: true },
    last_name: { type: 'string', required: true },
    email: { type: 'string', required: true}
})

module.exports = mongoose.model('user', userSchema);