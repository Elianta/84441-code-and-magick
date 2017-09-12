'use strict';
(function () {
  var similar = document.querySelector('.setup-similar');
  var similarWizardList = similar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizardArtifacts = function (wizard) {
    return wizard.artifacts.map(function (it) {
      return it.name;
    }).join('<br>');
  };

  var renderWizard = function (wizard) {
    var wizardDocumentFragment = similarWizardTemplate.cloneNode(true);
    var wizardElement = wizardDocumentFragment.querySelector('.wizard');
    wizardDocumentFragment.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardDocumentFragment.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardDocumentFragment.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    window.popup(wizardElement, function () {
      return renderWizardArtifacts(wizard);
    });
    return wizardDocumentFragment;
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
