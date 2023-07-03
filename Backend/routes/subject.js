const express = require('express');
const router = express.Router();

// :id 값으로 받아오는 것들 정의하기 

router.get('/', (req, res,next) =>{
    //subject 화면 렌더링
    res.render('subject');
})


//POST/ subject 라우트에 대한 처리
router.post('/', (req, res) =>{
    const selectedTopic = req.body.topic;

    if (selectedTopic === 'food') {
        res.redirect('speak/food');
    }
    else if (selectedTopic === 'travel') {
         res.redirect('/speak/travel');
    }
    else if (selectedTopic === 'family') {
        res.redirect('/speak/family');
    } else {
        //선택할 주제가 없을 때의 에러 처리해주깅
        res.status(400).json({message : '주제를 선택해주세요.'});
    }
})

module.exports = router;