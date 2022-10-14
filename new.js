// const express = require('express');
// const demo = express();
// demo.get('/',function(req, res){
//     res.send("hello raju")
// }).listen(3000);








// const express = require('express');
// const demo = express();
// demo.get('/',function(req, res){
//     res.send("About raju")

// })
// demo.get('/about',function(req, res){
//     res.send("About raju")

// })
// demo.get('/profile',function(req, res){
//     res.send("profile")

// })
// demo.get('/signup',function(req, res){
//     res.send("Sign Up")

// })
// demo.update('/signup',function(req, res){
//     res.send(" this is Sign Up page")

// })
// demo.listen(3000);





// const express = require('express');
// const demo = express();
// demo.get('/',function(req, res){
//     res.send("About raju")
// })
// demo.put('/about',function(req, res){
//     res.send(" this is about page ")
// })
// demo.post('/profile',function(req, res){
//     res.send(" this is profile page")
// })
// demo.delete('/signup',function(req, res){
//     res.send(" this is delete page")

// })
// demo.listen(3000);





//middil ware



// const express = require('express');
// const demo = express();
// const checkUrl=function(req, res, next){
//      console.warn("current route is",req.originalUrl)
//      next();
// }
// demo.use(checkUrl);
// demo.get('/',function(req, res){
//     res.send("home page")
// })
// demo.get('/login',function(req, res){
//     res.send(" this is login page ")
// })
// demo.get('/about',function(req, res){
//     res.send(" this is about page")

// })
// demo.listen(3000);





const express = require('express');
const demo = express();
const router = express.Router();
const checkUrl=function(req, res, next){
     console.warn("current route is",req.originalUrl)
     next();
}
//demo.use(checkUrl);
demo.get('/',function(req, res){
    res.send("home page")
});
router.get('/login',checkUrl,function(req, res){
    res.send(" this is login page ")
});
demo.get('/about',function(req, res){
    res.send(" this is about page")

});
demo.use('/',router);
demo.listen(3000);

