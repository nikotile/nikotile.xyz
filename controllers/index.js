const router = require('express').Router();

// GET
router.get('/', require('./gets/home'));
router.get('/blog', require('./gets/blogs'));
router.get('/blog/:title', require('./gets/blog'));
router.get('/write', require('./gets/write'));
router.get('/rss', require('./gets/rss'));
router.get('/donate', require('./gets/donate'));

// POST
router.post('/write', require('./posts/write'));

module.exports = router;
