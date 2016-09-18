var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one' :{
        title: "Article One | Shine Bobby",
        heading: "Article One",
        date : "Sep 5, 2016",
        content :`
                <p>
                    This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article.
                </p>
                <p>
                    This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article.
                </p>
                <p>
                    This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article. This is the content  for my  first article.
                </p>
        `
},
    'article-two' :{
        title: "Article Two | Shine Bobby",
        heading: "Article Two",
        date : "Sep 10, 2016",
        content :`
                <p>
                    This is the content  for my  Second article. 
                </p>
        `
    },
    'article-three' :{
        title: "Article Three | Shine Bobby",
        date : "Sep 15, 2016",
        heading: "Article Three",
        content :`
                <p>
                    This is the content  for my  third article.
                </p>
        `
    }
};
function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content =  data.content;
var htmlTemplate =`
    
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title> 
        ${title} 
    </title>
    <link href="/ui/style.css" rel="stylesheet" />
</head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            ${content}
        </div>
    </body>
    
</html>
  
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/article-two', function (req, res) {
   res.send(createTemplate(articleTwo));
});
app.get('/article-three', function (req, res) {
   res.send(createTemplate(articleThree));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
