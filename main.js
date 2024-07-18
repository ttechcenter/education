//  change navbar styles on scroll

window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle
    ('window-scroll' , window.scrollY > 0)
}) 

//show/hide faq answers

const faqs = document.querySelectorAll('.faq'); 
faqs.forEach(faq => {

    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        //change icon

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = "fa-solid fa-minus";
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }
    })
    
})

//show /hide nav menu

const menu = document.querySelector(".nav__menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener('click', () => {
    menu.style.display = "flex"
    closebtn.style.display = "inline-block"
    menubtn.style.display = "none"
})

//close nav menu


const closeNav = () => {
    menu.style.display = "none"
    closebtn.style.display = "none"
    menubtn.style.display = "inline-block" 
}

closebtn.addEventListener('click', closeNav);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function myFunction2() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
  }