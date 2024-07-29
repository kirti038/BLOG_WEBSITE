    var express = require('express');
    const { signuppage ,signinpage,homepage,logout , creatBlog , uploadimg,blogupdate,commentkaro} = require('../controllers/usersController');
    const { isloggedin } = require('../util/middelware');
    var router = express.Router();

    router.get('/', homepage);
    router.post('/register', signuppage);
    router.post("/login",signinpage)
    router.get("/logout", isloggedin ,logout)

    router.post('/createBlog', isloggedin,creatBlog)
    router.post("/uploadimg/:id" , isloggedin, uploadimg)
    router.post("/updateBlog/:id", isloggedin, blogupdate)
    router.post("/comment/:id", isloggedin, commentkaro)


  

    module.exports = router;
