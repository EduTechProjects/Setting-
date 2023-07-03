const express = require('express');
const speak = require('../schemas/speak');
const multer = require("multer");
const axios = require('axios');
const router = express.Router();

//multer 설정어떻게 하지?
const storage = multer.diskStorage({
    destination : function (req,file, cb) {
        cb(null, "uploads/") //업로드될 파일의 저장 위치 지정해줬음
    },
    filename : function(req, res, cb) {
        cb(null, "recording.wav");
    },
});

const upload = multer({storage});

// POST /upload-audio 경로에 대한 처리
router.post("/upload-audio", upload.single("audio"), async (req, res) => {
    try {
      // 파일 업로드가 완료되면 speak 모델을 사용하여 음성 처리를 진행
      const filePath = req.file.path; // 업로드된 파일의 경로
      const result = await speak.processAudio(filePath);
      // 처리 결과를 클라이언트로 응답
      res.json(result);
    } catch (error) {
      console.error("음성 처리 중 오류가 발생했습니다.", error);
      res.status(500).json({ error: "음성 처리 중 오류가 발생했습니다." });
    }
  });

  //POST/speak/:topic 경로에 대한 처리
  router.post('/speak/:topic', upload.array('audio', 3), async (req, res) =>{
    try {
        const topic = req.params.topic;
        const questionArr= Questions[topic];
        const audioFiles = req.files;

        const responses = [];
        for(let i=0; i < questionArr.lenth; i++) {
            const audioFile = audioFiles[i];
            const formData = new FormData();
            formData.append('audio', audioFile.buffer, 'recording.wav');

            const response = await axios.post('/upload-audio', formData, {
                headers : formData.getHeaders(),
            });

            response.push(response.data);
        }
        //response 배열에는 각 응답 결과가 들어있음
        console.log(responses);

        response.sendStatus(200);
    } catch(error) {
      console.error('오류가 발생했습니다.', error);
      res.status(500).json({
        error : '오류가 발생했습니다.'
      });
    }
  })


  
  module.exports = router;