'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (event, action) {
      if (event.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (event, action) {
      if (event.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomFromRange: function (min, max) {
      return (Math.random() * (max - min) + min);
    },
    getRandomFromArray: function (array) {
      return array[Math.floor(this.getRandomFromRange(0, array.length))];
    },
    showElement: function (element) {
      element.classList.remove('hidden');
    },
    hideElement: function (element) {
      element.classList.add('hidden');
    }
  };
})();
