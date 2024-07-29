 var express = require('express');
const { indexregister ,indexHomepage,indexlogin ,indexprofile,indexcreatBlog,indexblogDescription,updateBlog, deletblog} = require('../controllers/indexcontroller')
const {isloggedin} = require('../util/middelware')
var router = express.Router();

router.get('/', indexHomepage);
router.get('/register', indexregister);
router.get('/login', indexlogin )
router.get('/profile',isloggedin,indexprofile)
router.get('/createblog', isloggedin,indexcreatBlog);
router.get('/update/:id', isloggedin,updateBlog);
router.get('/blogdescription/:id',isloggedin, indexblogDescription);

router.get('/createblog', isloggedin,indexcreatBlog);

router.get("/delete/:id", isloggedin, deletblog)



module.exports = router;

