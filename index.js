const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));

const messages = [];

app.get('/', (request, response) => {
    response.render('home', {messages: messages});
});

app.post('/new', (request, response) => {

    let messages;
    if (fs.fileExistsSync('./namemess.json')) ;
    const text = fs.readfileSync('./namemess.json', {encoding: 'UTF-8'});
    messages = JSON.parse(text);
} else {
    messages = [];
}
    });
    console.log(content);
    messages.push({
        author: request.body.author,
        text: request.body.text,
        date: new Date()
    });
    response.redirect('/');
});

const text=JSON.stringify(messages);
fs.writeFileSync('/nameegal.json', text,{encoding: 'UTF-8'},
    function () {
});


app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
