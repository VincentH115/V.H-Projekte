const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');

let currentIndex = 0;
const intervalTime = 2900;

function nextSlide() {
  images[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = 1;
}
setInterval(nextSlide, intervalTime);

document.addEventListener("DOMContentLoaded", function() {
  var scrollLinks = document.querySelectorAll(".nav_link");
  scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    });
  });
});

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
var scrollButton = document.querySelector('.scroll-to-bottom');
if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
  scrollButton.classList.remove('show');
} else {
  scrollButton.classList.add('show');
}
});




