'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarWizardList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getRandomFromArray = function (array) {
  return array[Math.floor(window.getRandomFromRange(0, array.length))];
};

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

var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards.push({
    name: getRandomFromArray(WIZARD_FIRST_NAMES) + ' ' + getRandomFromArray(WIZARD_LAST_NAMES),
    coatColor: getRandomFromArray(WIZARD_COAT_COLORS),
    eyesColor: getRandomFromArray(WIZARD_EYE_COLORS)
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarWizardList.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
