const mongoose = require('mongoose');
const {Schema} = mongoose;

const speakscheama = new Schema({
   question : {
    type : String,
    required : true,
   },
   answer_speak : {
    type : Buffer,
    required : true,
   }
})

module.exports = mongoose.model('speak', speakscheama);
