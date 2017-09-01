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
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var fillElement = function (element, color) {
    element.style.fill = color;
  };
  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: window.util.getRandomFromArray(WIZARD_FIRST_NAMES) + ' ' + window.util.getRandomFromArray(WIZARD_LAST_NAMES),
      coatColor: window.util.getRandomFromArray(WIZARD_COAT_COLORS),
      eyesColor: window.util.getRandomFromArray(WIZARD_EYE_COLORS)
    });
  }

  window.colorizeElement(coatColorSetup, WIZARD_COAT_COLORS, fillElement);
  window.colorizeElement(eyeColorSetup, WIZARD_EYE_COLORS, fillElement);
  window.colorizeElement(fireballColorSetup, WIZARD_FIREBALL_COLORS, changeElementBackground);

  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  similarWizardList.appendChild(fragment);
  window.util.showElement(userDialog.querySelector('.setup-similar'));

  // Implement drag&drop functionality for wizard artifacts
  shopElement.addEventListener('dragstart', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      draggedItem = event.target;
      event.dataTransfer.setData('text/plain', event.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    if (evt.target.tagName.toLowerCase() === 'div' && evt.target.innerHTML === '') {
      var nodeCopy = draggedItem.cloneNode(true);
      evt.target.appendChild(nodeCopy);
    }
    artifactsElement.style.outline = 'none';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outline = '2px dashed red';
    evt.preventDefault();
  });
})();
