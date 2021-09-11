let express = require('express');
let app = express();
let router = require('./router/main')(app);
let port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public')); //html 밑에있는 나머지는 public에 있음

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
