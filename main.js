/* mouseover animation for "Devon Klipp" logo */

let nameLogo = document.querySelector(".brand-logo");
nameLogo.addEventListener("mouseover", function(event){
    event.target.innerHTML = "Welcome!! Please enjoy!! Feel free to contact me!!";

setTimeout(function(){
    event.target.innerHTML = "DEVON KLIPP";
    event.target.style.color = "white";
}, 3500);
}, false);

/* Anchor offset #href */

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 140);
});

/* typewriter effect */

let typed2 = new Typed('#typed2', {
    strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });