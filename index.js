'use strict';

var express = require('express'),
  fs = require('fs');

var app = express();

app.get('/download/*', function(req, res) {
  var list = req.params[0];
  var opts = ''
  if (list === 'all') {
    opts = '-a';
  } else {
    opts = '-s '+list;
  }
  var exec = require('child_process').exec;
  var child = exec("cd node_modules/bitcore/; node browser/build.js -o "+opts,
    { maxBuffer: 524288 },
    function(error, stdout, stderr) {
      if (error) res.write(error.toString());
      res.write(stdout);
      res.end();
    }
  );
});

var server = app.listen(3010, function() {
  console.log('Listening on port %d', server.address().port);
});
