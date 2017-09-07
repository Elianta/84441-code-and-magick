'use strict';
(function () {
  var COLOR_STEEL_BLUE = 'rgb(101, 137, 164)';
  var COLOR_DARK_PINK = 'rgb(241, 43, 107)';
  var COLOR_PURPLE = 'rgb(146, 100, 161)';
  var COLOR_SEA_GREEN = 'rgb(56, 159, 117)';
  var COLOR_MUSTARD = 'rgb(215, 210, 55)';
  var COLOR_BLACK = 'rgb(0, 0, 0)';
  var WIZARD_COAT_COLORS = [COLOR_STEEL_BLUE, COLOR_DARK_PINK, COLOR_PURPLE,
    COLOR_SEA_GREEN, COLOR_MUSTARD, COLOR_BLACK];
  var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyeElement = wizardElement.querySelector('.wizard-eyes');
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');

  window.wizard = {
    onEyesChange: function () {
    },
    onCoatChange: function () {
    }
  };

  var fillElement = function (element, color) {
    element.style.fill = color;
  };
  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  wizardCoatElement.addEventListener('click', function () {
    window.colorize.randomColor(wizardCoatElement, WIZARD_COAT_COLORS, fillElement);
    var currentCoatColor = wizardCoatElement.style.fill;
    window.wizard.onCoatChange(currentCoatColor);
  });
  wizardEyeElement.addEventListener('click', function () {
    window.colorize.randomColor(wizardEyeElement, WIZARD_EYE_COLORS, fillElement);
    var currentEyeColor = wizardEyeElement.style.fill;
    window.wizard.onEyesChange(currentEyeColor);
  });
  window.colorize.onElementClick(wizardFireballElement, WIZARD_FIREBALL_COLORS, changeElementBackground);
})();
