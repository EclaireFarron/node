// jshint esversion:6
const express = require("express");
const http = require("http");
const https = require("https");
const bodyParser = require('body-parser');
const queryString = require("query-string")
const app = express();
const testUrl = "http://helloworld-env.eba-spbnvezu.us-east-1.elasticbeanstalk.com/hello-world";
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req,res){
    var testData;
      http.get(testUrl,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
          //const testData = toString(data);
           testData = data.toString("utf-8")
          console.log(testData);
          res.send("<h1>"+ testData +"</h1>");
        });
    });

  // res.sendFile(__dirname + "/index.html");
});
// app.post("/", function(req,res){
//   const query = "London";
//   const appid = "586f26fd93868314e00400813c85d421";
//   const units = "metric";
//   const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appid+"&units="+units;
//
//   https.get(url, function(response){
//     console.log(response.statusCode);
//
//     response.on("data", function(data){
//       const weatherData = JSON.parse(data);
//       const temp = weatherData.main.temp;
//       const description = weatherData.weather[0].description;
//       const icon = weatherData.weather[0].icon;
//       const imageUrl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
//       console.log(weatherData);
//       console.log(temp);
//       console.log(description);
//       console.log(url);
//       res.write("<p>The weather is currently " + description + "<p>");
//       res.write("<h1>The current temperature in "+ query +" is "+ temp +" degrees Celcius</h1>");
//       res.write("<img src = " + imageUrl + ">");
//       res.send();
//     });
//   });
// });




app.listen(3000, function(){
  console.log("server in port 3000");
});
