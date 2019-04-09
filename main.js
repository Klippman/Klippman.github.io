

/* mouseover animation for "Devon Klipp" logo */

let nameLogo = document.querySelector(".brand-logo");
nameLogo.addEventListener("mouseover", function(event){
    event.target.innerHTML = "Welcome!! Please enjoy!! Feel free to contact me!!";

setTimeout(function(){
    event.target.innerHTML = "DEVON KLIPP";
    event.target.style.color = "white";
}, 3500);
}, false);

/* Anchor offset #href Nav bar list*/

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

    }, 30 * i);
  }(i));
}

/* Anchor point for background image change */

// let selector = document.querySelector('#home')

// window.addEventListener('scroll', () => {
//     if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
//       selector.style.backgroundImage = "url('../Klippman.github.io/images/soccer1.jpg')";
//       selector.style.transition = 'background-image 0.4s ease-in-out';
//     } else {
//       selector.style.backgroundImage = "url('../Klippman.github.io/images/soccer.jpg')";
//       selector.style.transition = 'background-image 0.4s ease-in-out';
//     }
// });

/* Anchor point for nav bar color to change to initial */

let navColor = document.querySelector('nav')

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    navColor.style.background = 'initial';
    navColor.style.transition = 'background-color 0.2s ease-in-out';
  } else {
    navColor.style.background = '#74B4BF';
    navColor.style.transition = 'background-color 0.2s ease-in-out';
  }
});
