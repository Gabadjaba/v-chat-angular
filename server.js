const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/v-chat-angular'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/v-chat-angular/index.html'));
});

app.listen(port, () => {
  console.log('Server started', `http://localhost:${port}`)
})
