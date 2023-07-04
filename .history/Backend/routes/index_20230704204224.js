const express = require('express');
const router = express.Router();
const axios = require('axios');

// 다른 모듈에서 가져온 라우터
const speakRouter = require('./speak');
const homeRouter = require('./home');
const subjectRouter = require('./subject');
const feedbackRouter = require('./feedback');

// Speak.js 라우터
router.use('/speak', speakRouter);

// Home.js 라우터
router.use('/home', homeRouter);

// Subject.js 라우터
router.use('/subject', subjectRouter);

// Feedback.js 라우터
router.use('/feedback', feedbackRouter);

module.exports = router;
