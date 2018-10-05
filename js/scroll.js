function _scroll(){
    var acticles = $('main.content-area > div.article');
    console.log(acticles);
    var height = window.innerHeight || document.body.offsetHeight;
    $(window).scroll(function () {
        acticles.each(function () {
            var top = this.getBoundingClientRect().top();
            console.log(top);
            if(top < height - 100){
                $(this).addClass('animated');
            }
        })
    })
}
console.log("ok");
_scroll();
