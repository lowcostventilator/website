let express = require('express');
let app = express();

app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
app.use('/vendor', express.static('vendor'));

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.listen(5000, function(){
    console.log("Listening on port 5000!")
});
