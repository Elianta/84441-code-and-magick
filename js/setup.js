'use strict';
(function () {
  var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия',
    'Люпита', 'Вашингтон'];
  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
    'Топольницкая', 'Нионго', 'Ирвинг'];

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

  var userDialog = document.querySelector('.setup');
  var coatColorSetup = userDialog.querySelector('.wizard-coat');
  var eyeColorSetup = userDialog.querySelector('.wizard-eyes');
  var fireballColorSetup = userDialog.querySelector('.setup-fireball-wrap');
  var similarWizardList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: window.util.getRandomFromArray(WIZARD_FIRST_NAMES) + ' ' + window.util.getRandomFromArray(WIZARD_LAST_NAMES),
      coatColor: window.util.getRandomFromArray(WIZARD_COAT_COLORS),
      eyesColor: window.util.getRandomFromArray(WIZARD_EYE_COLORS)
    });
  }

  window.colorize(coatColorSetup, function (color) {
    coatColorSetup.style.fill = color;
  }, WIZARD_COAT_COLORS);
  window.colorize(eyeColorSetup, function (color) {
    eyeColorSetup.style.fill = color;
  }, WIZARD_EYE_COLORS);
  window.colorize(fireballColorSetup, function (color) {
    fireballColorSetup.style.backgroundColor = color;
  }, WIZARD_FIREBALL_COLORS);

  // coatColorSetup.addEventListener('click', function () {
  //   coatColorSetup.style.fill = window.util.getRandomFromArray(WIZARD_COAT_COLORS);
  // });
  // eyeColorSetup.addEventListener('click', function () {
  //   eyeColorSetup.style.fill = window.util.getRandomFromArray(WIZARD_EYE_COLORS);
  // });
  // fireballColorSetup.addEventListener('click', function () {
  //   fireballColorSetup.style.backgroundColor = window.util.getRandomFromArray(WIZARD_FIREBALL_COLORS);
  // });

  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  similarWizardList.appendChild(fragment);
  window.util.showElement(userDialog.querySelector('.setup-similar'));
})();


