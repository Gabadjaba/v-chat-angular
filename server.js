const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

app.use(express.static(__dirname + '/dist/v-chat-angular'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/v-chat-angular/index.html'));
});

const server = app.listen(port, host, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://%s:%s', host, port)
})
