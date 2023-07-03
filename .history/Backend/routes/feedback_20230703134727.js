const express = require('express');
const feedback = require('../schemas/feedback');
const speak = require('../schemas/speak');
const feedback = require('../schemas/feedback');
const axios = require('axios');

//POST /feedback 경로 처리
router.post('/feedback', async(req,res) =>{
    try {
        //음성 처리 결과를 받아오기 위해 FlaskAPI로 요청함
        const formData = new FormData();
        formData.append('file, ', req.body.audio);

        const response = await axios.post('http://flask-api-url/transcribe', formData, {
            headers : {
                'Content-Type' : 'multipart/form-data',
            },
        });

        const {transcription, fixed} = response.data;

        //프론트엔드에 결과 전달 
        response.json({transcription, fixed});
    } catch(error) {
        console.error('음성 처리 과정 중에 오류가 발생했습니다🙄', error);
        res.status(500).json({error : '음성 처리 렌더링에 이생이 발생했습니다.'});
    }
});

module.exports = router;

