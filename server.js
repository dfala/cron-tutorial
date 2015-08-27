// Dependencies
var express = require('express');
var CronJob = require('cron').CronJob;


// App definition
var app = express();

var portNum = 3000;
app.listen(3000, function () {
    console.log('Making some pancakes on port:', portNum);
});

new CronJob('00 00 05 * * 1-5', function() {
    
    // Execute code here
    console.log('Hello puppies!')

}, null, true, 'America/Los_Angeles');