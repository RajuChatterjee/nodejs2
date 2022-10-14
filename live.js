// var http = require('http')
// http.createServer(function(req ,res){
//  res.write("hello world");
//  res.end();
// }).listen(4000)



// var sum = function (a,b){
//     return a+b
// }
// console.log(sum(20,30));



//  var add = function (a,b)
// {
//          return a+b
// } 
// function hardExp(add)
// {
//     console.warn(add(200,300))
// }

// hardExp(add)




// var demo = require('./demo')
// console.log(demo())




// var demo = require('./demo')
// console.log(demo(20,300))






// var http = require('http')
// http.createServer(function(req, res){
//     res.write('hello world');
//     res.end();
// }).listen(2000)


// var http = require('http')
// http.createServer(function(req, res){
//     res.writeHead(200,{'Content-type':'application\json'})

//     res.write('{"name":"raju"}');
//     res.end();
// }).listen(2000)







// var http = require('http')
// var  data={name:"raju",age:"21",email:"raju@example.com"}
// http.createServer(function(req, res){
//     res.writeHead(200,{'Content-type':'application\json'})
// res.write(JSON.stringify(data));
//     // res.write(data);
//     res.end();
// }).listen(2000)








// var http = require('http')
// var  data = [
// {name:"raju",age:"21",email:"raju@example.com"}
// ,{name:"raju",age:"21",email:"raju@example.com"}
// ,{name:"raju2",age:"21",email:"raju@example.com"}
// ,{name:"raju3",age:"21",email:"raju@example.com"}
// ]
// http.createServer(function(req, res){
//     res.writeHead(200,{'Content-type':'application\json'})
// res.write(JSON.stringify(data));
//     // res.write(data);
//     res.end();
// }).listen(2000)







// var http = require('http')
// http.createServer(function(req, res){
//     // res.write("hello everyone");
//     res.write("<h1>hello</h1>");
//     res.write();
// }).listen(2000)




// var http = require('http')
// http.createServer(function(req, res){
//    res.writeHead(200,{'Content-Type':"text/html"})
//     res.write("<input type='text'/>");
//     res.write();
// }).listen(2000)





// var http = require('http')
// var page =`
// <h1>hello</h1>
// <input type='text'/><br>
// <input type='text'/><br>
// <input type='text'/>`

// http.createServer(function(req, res){
//    res.writeHead(200,{'Content-Type':"text/html"})
    
//    res.write(page);
//     res.end();
// }).listen(2000)









// var http = require('http')
// var uc = require('upper-case')


// http.createServer(function(req, res){

// res.write(uc.upperCase("raju"));
//     res.end();
// }).listen(2000)

//12/10/22

// var http = require('http')
// var fs= require('fs');
// http.createServer(function(req, res){
// fs.readFile('index.html',function(err,data){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write(data);
//     return res.end()
// })

// }).listen(2000)





// var fs = require('fs');
// var rs = fs.createReadStream('./live.txt')

// rs.on('open', function(){
//     console.log("live file is here");
// })






// var events =require('events');
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on("Speak",function(name){
//     console.log(name,"i am speak")
// })
// eventEmitter.emit("Speak","Raju")





// var events =require('events');
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on("listen",function(name){
//     console.log(name,"i am speak")
// })
// eventEmitter.emit("listen","Raju")




