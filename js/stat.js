'use strict';
(function () {
  window.renderStatistics = function (ctx, names, times) {
    var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
    var COLOR_BLACK = 'rgba(0, 0, 0, 1.0)';
    var COLOR_WHITE = 'rgba(255, 255, 255, 1.0)';
    var COLOR_RED = 'rgba(255, 0, 0, 1)';
    // Тень облака
    ctx.beginPath();
    ctx.fillStyle = SHADOW_COLOR;
    ctx.arc(231, 190, 120, Math.PI / 180 * 125, Math.PI / 180 * 213, false);
    ctx.arc(171, 81, 60, Math.PI / 180 * 133, Math.PI / 180 * 323, false);
    ctx.arc(280, 160, 130, Math.PI / 180 * 240, Math.PI / 180 * 314, false);
    ctx.arc(409, 180, 120, Math.PI / 180 * 248, Math.PI / 180 * 66, false);
    ctx.lineTo(162, 288);
    ctx.closePath();
    ctx.fill();
    // Облако
    ctx.beginPath();
    ctx.strokeStyle = COLOR_BLACK;
    ctx.fillStyle = COLOR_WHITE;
    ctx.arc(221, 180, 120, Math.PI / 180 * 125, Math.PI / 180 * 213, false);
    ctx.arc(161, 71, 60, Math.PI / 180 * 133, Math.PI / 180 * 323, false);
    ctx.arc(270, 150, 130, Math.PI / 180 * 240, Math.PI / 180 * 314, false);
    ctx.arc(399, 170, 120, Math.PI / 180 * 248, Math.PI / 180 * 66, false);
    ctx.lineTo(152, 278);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    // Надписи в конце игры
    ctx.fillStyle = COLOR_BLACK;
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
        ctx.fillStyle = COLOR_RED;
      } else {
        var opacity = window.util.getRandomFromRange(0.1, 1).toFixed(1);
        ctx.fillStyle = 'rgba(18, 61, 210, ' + opacity + ')'; // синий
      }
      ctx.fillRect(initialX + barHorizontalIndent * j, initialY, barWidth, -times[j] * histogramHeightProportion);
      ctx.fillStyle = COLOR_BLACK;
      ctx.fillText(names[j], initialX + barHorizontalIndent * j, initialY + nameTextTopIndent);
      ctx.fillText(times[j].toFixed(), initialX + barHorizontalIndent * j, initialY - times[j] * histogramHeightProportion - timeTextBottomIndent);
    }
  };
})();

