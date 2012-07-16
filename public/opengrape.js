window.addEventListener('load', function () {
  var android = navigator.userAgent.match(/Android/),
      speed = android ? 500 : 10, // real devices can tolerate <~250ms
      footer = document.getElementsByTagName('footer')[0],
      button = document.getElementsByTagName('button')[0],
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
        } else if (e.target === button) {
          switch (button.innerText) {
            case 'Login':
              FB.login(function(rsp) {}, {
                scope:'publish_actions'
              });
              break;
            case 'Drink':
              FB.api('/me/opngrpe:drink', 'POST', {
                'wine': location.href
              }, function(response){
                if (response.id) {
                  button.innerText = 'Drank!';
                } else {
                  alert('There was a problem drinking this wine');
                }
              });
          }
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

window.fbAsyncInit = function() {
  FB.init({
    appId: '435461749820612',
    cookie: true
  });
  var updateButton = function(response) {
    document.getElementsByTagName('button')[0].innerHTML =
      response.authResponse ? 'Drink' : 'Login';
  };
  FB.getLoginStatus(updateButton, true);
  FB.Event.subscribe('auth.statusChange', updateButton);
};
(function(d){
  var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  ref.parentNode.insertBefore(js, ref);
}(document));
