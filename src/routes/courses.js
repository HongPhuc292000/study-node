const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
const siteController = require('../app/controllers/SiteController');

router.get('/:slug', courseController.index);
router.get('/', siteController.index);

module.exports = router;
