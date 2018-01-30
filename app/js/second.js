var second = (function () {
  var init = function () {
    console.log('works Second');
    first.init();
  }

  return {init: init};
})();