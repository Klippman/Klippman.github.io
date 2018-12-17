

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
    window.scrollTo(window.scrollX, window.scrollY - 135);
});

/* Typewriter animation */

const wrapper = document.querySelector(".wrapper");
const text = document.querySelector(".text");

let textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 45 * i);
  }(i));
}

/* Breakpoint for background image change */

let selector = document.querySelector('#home')

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      selector.style.backgroundImage = "url('../Klippman.github.io/images/soccer1.jpg')";
    } else {
      selector.style.backgroundImage = "url('../Klippman.github.io/images/soccer.jpg')";
    }
});
