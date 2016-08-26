var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = 'e6a70a13b3ae4bb0a5bb26f1b2d8c0d3';
var sentryApp = '94649';
var sentryUrl = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: '4',
  version: '1.0'
}

Raven.config(sentryUrl).install();


ReactDOM.render(
  routes,
  document.getElementById('app')
)
