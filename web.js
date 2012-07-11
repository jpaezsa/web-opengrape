/**
* Copyright 2012 Facebook, Inc.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to
* use, copy, modify, and distribute this software in source code or binary
* form for use in connection with the web services and APIs provided by
* Facebook.
*
* As with any software that integrates with the Facebook platform, your use
* of this software is subject to the Facebook Developer Principles and
* Policies [http://developers.facebook.com/policy/]. This copyright notice
* shall be included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
* THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
* DEALINGS IN THE SOFTWARE.
*/

// use the Express framework, and expect to read files
var express = require('express');
var fs = require('fs');

// create application
var app = express.createServer();

// load datasets
var wines = JSON.parse(fs.readFileSync('data/wines.json')),
    grapes = JSON.parse(fs.readFileSync('data/grapes.json'));

// serve wine end points
app.get('/wines/:wine', function(request, response) {
  var wine = wines[request.params.wine];
  if (wine) {
    response.send('Wine: ' + wine.title);
  } else {
    response.send(404);
  }
});

// serve grape end points
app.get('/grapes/:grape', function(request, response) {
  var grape = grapes[request.params.grape];
  if (grape) {
    response.send('Grape: ' + grape.title);
  } else {
    response.send(404);
  }
});

// serve default end point, redirect to first wine
app.get('/', function(request, response){
  for (wine in wines) {
    response.redirect("/wines/" + wine);
    return;
  }
});

// spin up server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
