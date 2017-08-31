'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userDialogSave = userDialog.querySelector('.setup-submit');
  var userName = userDialog.querySelector('.setup-user-name');
  var dialogHandle = userDialog.querySelector('.upload');
  var userDialogPosition = {
    x: window.getComputedStyle(userDialog).left,
    y: window.getComputedStyle(userDialog).top
  };

  var onPopupEscPress = function (event) {
    window.util.isEscEvent(event, function () {
      if (userName !== document.activeElement) {
        window.util.hideElement(userDialog);
      }
    });
  };
  var openPopupUserDialog = function () {
    window.util.showElement(userDialog);
    userDialog.style.top = userDialogPosition.y;
    userDialog.style.left = userDialogPosition.x;
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

  dialogHandle.addEventListener('mousedown', function (event) {
    event.preventDefault();
    var startPosition = {
      x: event.clientX,
      y: event.clientY
    };
    var newPosition = {
      x: event.clientX,
      y: event.clientY
    };
    var onMouseMove = function (moveEvent) {
      moveEvent.preventDefault();
      var shift = {
        x: newPosition.x - moveEvent.clientX,
        y: newPosition.y - moveEvent.clientY
      };
      newPosition = {
        x: moveEvent.clientX,
        y: moveEvent.clientY
      };
      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };
    var onMouseUp = function (upEvent) {
      upEvent.preventDefault();
    };
    var onClick = function (clickEvt) {
      if (startPosition.x !== newPosition.x || startPosition.y !== newPosition.y) {
        clickEvt.preventDefault();
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('click', onClick);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('click', onClick);
  });
})();
