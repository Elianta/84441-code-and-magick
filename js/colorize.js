'use strict';
(function () {
  window.colorize = function (element, onColorChange, colorSet) {
    element.addEventListener('click', function () {
      var color = window.util.getRandomFromArray(colorSet);
      onColorChange(color);
    });
  };
})();
