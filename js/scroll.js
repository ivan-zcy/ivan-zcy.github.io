function _scroll(){
    var acticles = $('content-area');
    var height = window.innerHeight || document.body.offsetHeight;
    $(window).scroll(function () {
        acticles.each(function () {
            var top = this.getBoundingClientRect().top();
            console.log(top);
            if(top < height - 100){
                $(this).addClass('animate');
            }
        })
    })
}
console.log("ok");
_scroll();
