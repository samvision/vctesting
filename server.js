'use strict';

var environment = process.env.RTC_ENV || 'local';
var createError = require('http-errors');
const express = require('express');
const http = require('http');
var https = require('https');
var fs = require('fs');

// var sockets = require('signalmaster/sockets')
var serverPort = process.env.RTC_PORT || 3000
var serverIpAddress = process.env.RTC_IP || 'localhost'
var socketIoServer = '127.0.0.1' + ':' + serverPort;


var httpOptions =  {
 
 key: fs.readFileSync('privatekey.pem'),

 cert: fs.readFileSync('certificate.crt')
};


const app = express();
const port = 3000;

function redirectSec(req, res, next) {
	if (req.headers['x-forwarded-proto'] == 'https') {
		var redirect = 'https://' + req.headers.host + req.path;
		console.log('Redirect to:' + redirect);
		res.redirect(redirect);
	} else {
		return next();
	}
}

app.use(redirectSec);

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/scripts', express.static(__dirname + '/node_modules/'));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(__dirname + '/public/index.html'));



var server = https.createServer(httpOptions, app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info('listening on %d', port);
});

