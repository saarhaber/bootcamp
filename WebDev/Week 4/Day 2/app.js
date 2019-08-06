var express = require('express');
var app = express();

app.get('/hello/:firstname/:lastname', function(request, response) {

response.send(`Greetings ${request.params.firstname} ${request.params.lastname}!`);
});

app.get(['/apple', '/ale'], function(request, response) {
response.send("Apple or Ale?");
});


app.get('/Who+a+', function(request, response) {
response.send("I know, right?!");
});

app.get('/reverse/:word', function(request, response) {
    let reverse = "";
    const word1 =request.params.word;
    const leng = word1.length;
    for (let i=leng-1; i>=0; i--) {
        reverse+=word1[i];
    }
    response.send(reverse);
    });

//if no routes are matched, return a 404
app.get('*', function(request, response) {
    console.log ("404");
    response.status(404).send('uh oh! page not found!');
    });
    
    
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});