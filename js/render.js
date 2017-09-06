'use strict';
(function () {
  var similar = document.querySelector('.setup-similar');
  var similarWizardList = similar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  window.render = function (data) {
    var fragment = document.createDocumentFragment();
    var number = (data.length) > 4 ? 4 : data.length;
    similarWizardList.innerHTML = '';
    for (var i = 0; i < number; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarWizardList.appendChild(fragment);
    window.util.showElement(similar);
  };
})();
