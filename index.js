'use strict';

var express = require('express'),
  fs = require('fs');

var app = express();

// Add headers
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.get('/download/*', function(req, res) {
  var list = req.params[0];
  var opts = ''
  if (list === 'all') {
    opts = '-a';
  } else {
    opts = '-s ' + list;
  }
  var match = list.match(/^([a-zA-Z\/\.]+)(,[a-zA-Z\/\.]+)*$/);
  if (!match) {
    res.write('Bad URL format');
    res.end();
    return;
  }
  var exec = require('child_process').exec;
  var child = exec("cd node_modules/bitcore/; node browser/build.js -o " + opts, {
      maxBuffer: 524288
    },
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
