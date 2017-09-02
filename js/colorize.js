'use strict';
(function () {
  window.colorizeElement = function (element, colorSet, onColorChange) {
    element.addEventListener('click', function () {
      var color = window.util.getRandomFromArray(colorSet);
      onColorChange(element, color);
    });
  };
})();
