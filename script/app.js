document.addEventListener('DOMContentLoaded', function() {

const header = document.querySelector('.header');

window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY;

    if(scrollPos > 0){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
})

if(window.innerWidth > 600){
    $("location").ready(
    function(){
        $(".header").animate({
            "top": "0px"
        }, 500);

        $(".header").animate({
            "top": "0px"
        }, 200);
    }
)
}

alert('Сайт в разработке ;)')
}, false);
