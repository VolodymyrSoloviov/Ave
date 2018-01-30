var third = (function () {
  var init = function () {
      console.log('works third');
    },
    warn = function () {
      console.info('Ахтунг !!!');
    };

  return {init: init, warn: warn};
})();