cordova.define('com.davidglivar.cordova.echo', function (require, exports, module) {

  window.echo = function (str, callback) {
    cordova.exec(callback, function (err) {
      callback('Nothing to echo');
    }, 'Echo', 'echo', [str]);
  };

});