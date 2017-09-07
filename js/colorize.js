'use strict';
(function () {
  window.colorize = {
    onElementClick: function (element, colorSet, onColorChange) {
      element.addEventListener('click', function () {
        var color = window.util.getRandomFromArray(colorSet);
        onColorChange(element, color);
      });
    },
    randomColor: function (element, colorSet, onColorChange) {
      var color = window.util.getRandomFromArray(colorSet);
      onColorChange(element, color);
    }
  };
})();
