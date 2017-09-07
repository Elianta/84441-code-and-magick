'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;
  var form = userDialog.querySelector('.setup-wizard-form');

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.style.lineHeight = 2.0;
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    window.backend.save(new FormData(form), function () {
      window.util.hideElement(userDialog);
    }, errorHandler);
  });

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
