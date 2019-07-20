var device = require('express-device');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

let accessLogStream = fs.createWriteStream(path.join(__dirname, '../../logged/access.log'), { flags: 'a' });
var loggerFormat = '[:date[web]] :method :url :status :response-time';

module.exports = morgan(loggerFormat, { stream: accessLogStream });
