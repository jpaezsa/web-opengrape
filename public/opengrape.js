window.addEventListener('load', function () {
  var android = navigator.userAgent.match(/Android/),
      speed = android ? 500 : 10, // real devices can tolerate <~250ms
      footer = document.getElementsByTagName('footer')[0],
      height = function () {
        if (android && Math.abs(window.orientation) === '90') {
          return window.innerWidth;
        }
        return window.innerHeight;
      },
      adjust = function () {
        setTimeout(function () {
          window.scrollTo(0, android ? 1 : 0);
          setTimeout(function () {
            footer.style.top = (
              height() - footer.offsetHeight + (android ? 2 : 0)
            ) + 'px';
          }, speed);
        }, speed);
      },
      touch = function (e) {
        e.preventDefault();
        if (e.target.href) {
          location = e.target.href;
        }
      };
  [
    [window.onorientationchange?'orientationchange':'resize', adjust],
    ['touchstart', touch],
    ['mousedown', touch]
  ].forEach(function (eventHandler) {
    window.addEventListener(eventHandler[0], eventHandler[1], false);
  });
  adjust();
});
