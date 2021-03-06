const router = require('express').Router();

// GET
router.get('/', require('./gets/home'));
router.get('/now', require('./gets/now'));
router.get('/library', require('./gets/library'));
router.get('/blog', require('./gets/blogs'));
router.get('/blog/:title', require('./gets/blog'));
router.get('/write', require('./gets/write'));
router.get('/rss', require('./gets/rss'));

router.post('/write', require('./posts/write'));
router.post('/now', require('./posts/now'));

module.exports = router;
