'use strict';
var getRandom = function (min, max, digits) {
  return (Math.random() * (max - min) + min).toFixed(digits);
};
window.renderStatistics = function (ctx, names, times) {
  // Тень облака
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // черный
  ctx.arc(231, 190, 120, Math.PI / 180 * 125, Math.PI / 180 * 213, false);
  ctx.arc(171, 81, 60, Math.PI / 180 * 133, Math.PI / 180 * 323, false);
  ctx.arc(280, 160, 130, Math.PI / 180 * 240, Math.PI / 180 * 314, false);
  ctx.arc(409, 180, 120, Math.PI / 180 * 248, Math.PI / 180 * 66, false);
  ctx.lineTo(162, 288);
  ctx.closePath();
  ctx.fill();
  // Облако
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0, 0, 0, 1.0)'; // черный
  ctx.fillStyle = 'rgba(255, 255, 255, 1.0)'; // белый
  ctx.arc(221, 180, 120, Math.PI / 180 * 125, Math.PI / 180 * 213, false);
  ctx.arc(161, 71, 60, Math.PI / 180 * 133, Math.PI / 180 * 323, false);
  ctx.arc(270, 150, 130, Math.PI / 180 * 240, Math.PI / 180 * 314, false);
  ctx.arc(399, 170, 120, Math.PI / 180 * 248, Math.PI / 180 * 66, false);
  ctx.lineTo(152, 278);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  // Надписи в конце игры
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // черный
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 150, 50);
  ctx.fillText('Список результатов:', 150, 70);
  var maxTime = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }
  // Вертикальная гистограмма с именами и временем участников
  var histogramHeight = 150; // px
  var histogramHeightProportion = histogramHeight / maxTime;
  var barWidth = 40; // px
  var barHorizontalIndent = 50 + barWidth; // px
  var initialX = 150; // px
  var initialY = 250; // px
  var nameTextTopIndent = 5; // px
  var timeTextBottomIndent = 20; // px
  ctx.textBaseline = 'top';
  for (var j = 0; j < times.length; j++) {
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'; // красный
    } else {
      var opacity = getRandom(0.1, 1, 1);
      ctx.fillStyle = 'rgba(18, 61, 210, ' + opacity + ')'; // синий
    }
    ctx.fillRect(initialX + barHorizontalIndent * j, initialY, barWidth, -times[j] * histogramHeightProportion);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // черный
    ctx.fillText(names[j], initialX + barHorizontalIndent * j, initialY + nameTextTopIndent);
    ctx.fillText(times[j].toFixed(), initialX + barHorizontalIndent * j, initialY - times[j] * histogramHeightProportion - timeTextBottomIndent);
  }
};
