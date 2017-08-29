'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userDialogSave = userDialog.querySelector('.setup-submit');
  var userName = userDialog.querySelector('.setup-user-name');

  var onPopupEscPress = function (event) {
    window.util.isEscEvent(event, function () {
      if (userName !== document.activeElement) {
        window.util.hideElement(userDialog);
      }
    });
  };
  var openPopupUserDialog = function () {
    window.util.showElement(userDialog);
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopupUserDialog = function () {
    window.util.hideElement(userDialog);
    document.removeEventListener('keydown', onPopupEscPress);
  };

  userDialogOpen.addEventListener('click', openPopupUserDialog);
  userDialogOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopupUserDialog);
  });

  userDialogClose.addEventListener('click', closePopupUserDialog);
  userDialogClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopupUserDialog);
  });

  userDialogSave.addEventListener('click', closePopupUserDialog);
  userDialogSave.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopupUserDialog);
  });
})();

