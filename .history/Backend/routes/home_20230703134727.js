const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    //홈화면 렌더링
    res.render('home');
})

module.exports = router;