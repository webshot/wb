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

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function dev(){
    alert('Сайт в разработке ;)');
}

setTimeout(dev,600);
}, false);
