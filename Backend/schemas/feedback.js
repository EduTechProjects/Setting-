const mongoose = require('mongoose');

//내가 말한 영어문장 음성 데이터들을 GPT로 교정해준 결과물로 반환하기 
const {Schema}  = mongoose;
const feedbackSchema = new Schema({
    feedback : {
        type : 'String',
        required : 'true',
    },
    answer_text: {
        type : 'String',
        required : 'true',
    }
   
})

module.exports = mongoose.model('feedback', feedbackSchema);