const express = require('express');
const router = express.Router();

// 다른 모듈에서 가져온 라우터
const speakRouter = require('./speakRouter');
const homeRouter = require('./homeRouter');
const subjectRouter = require('./subjectRouter');
const feedbackRouter = require('./feedbackRouter');

// Speak.js 라우터
router.use('/speak', speakRouter);

// Home.js 라우터
router.use('/home', homeRouter);

// Subject.js 라우터
router.use('/subject', subjectRouter);

// Feedback.js 라우터
router.use('/feedback', feedbackRouter);

module.exports = router;
