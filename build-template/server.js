const express = require('express');
// const dirTree = require("directory-tree");
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  console.log('------', __dirname)
  // console.log('======', dirTree("/"))
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(port);