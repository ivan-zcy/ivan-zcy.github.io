var appDaily = {
  bindToggleButton: function() {
    var btn = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.navbar');

    app.use(express.static(__dirname + '../../public'));//设置静态文件目录

    btn.addEventListener('click', function() {
      var c = nav.getAttribute('class') || '';

      if (c.indexOf('show-force') !== -1) {
        nav.setAttribute('class', c.replace(/show-force/, '').trim());
      } else {
        nav.setAttribute('class', (c + ' show-force').trim());
      }
    });

  }
};

appDaily.bindToggleButton();
