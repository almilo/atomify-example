var angular = require('angular-bsfy');

module.exports = angular.module('samples', [])
    .factory('acGreeterService', require('./ac-greeter/ac-greeter-service'))
    .directive('acGreeter', require('./ac-greeter/ac-greeter-directive'))
    .directive('acSample', require('./ac-sample/ac-sample-directive'));
