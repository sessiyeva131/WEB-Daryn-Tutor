// SEARCH BAR ONCLICK 

let search = document.querySelector(".search");
let clear = document.querySelector(".clear");
let input = document.querySelector(".search-text");
let box = document.querySelector(".searchBox");
let searchinput = document.querySelector(".search-input");


search.onclick = function(){
  box.classList.toggle("active");
  search.classList.toggle("active");
  input.classList.toggle("active");
}

clear.onclick = function(){
  var text = searchinput.value;
  if(text.length > 0){
    searchinput.value = '';
  } else{
    box.classList.remove("active");
    search.classList.remove("active");
    input.classList.remove("active");
  }
}



// EFFECT PARALLAX ON MOUSEMOVE
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed)/100
        const y = (window.innerHeight - e.pageY * speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

if (window.matchMedia("(max-width: 700px)").matches){
  document.removeEventListener("mousemove", parallax);
}

// OPENING NAV MENU  
var menuIcon = document.querySelector(".menu-bar");
var navMenu = document.querySelector(".header-nav-block");
let menuOpen = false;

menuIcon.addEventListener("click", () => {
    if(!menuOpen){
      menuIcon.classList.add("open");
      navMenu.classList.add("open");
      document.body.style.overflow = 'hidden';
      menuOpen = true;
    } else {
      menuIcon.classList.remove("open");
      navMenu.classList.remove("open");
      document.body.style.overflow = 'visible';
      menuOpen = false;
    }
});


// CHANGING CONTENTS OF THE ELEMENT
var content1 = document.getElementById('change-content-pupil');
var content2 = document.getElementById('change-content-teacher');

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

var titleText = document.getElementById('title');
function open1(){
    content1.style.display="block";
    content2.style.display="none";
    btn1.style.backgroundColor = "#219653";
    btn2.style.backgroundColor = "rgba(33, 150, 83, 0.1)";
    btn2.style.color = "#219653";
    btn1.style.color = "#fff";
    titleText.textContent = "Оқуды қалай бастаймын?";
}

function open2(){
    content1.style.display="none";
    content2.style.display="block";
    btn1.style.backgroundColor = "rgba(33, 150, 83, 0.1)";
    btn2.style.backgroundColor = "#219653";
    btn2.style.color = "#fff";
    btn1.style.color = "#219653";
    titleText.textContent = "Сабақ беруді қалай бастаймын?";
}



// SWITCH LANG
function changeRU(){
    var lang = document.getElementById('currentLang');
    lang.textContent = "RU";
}
function changeKZ(){
    var lang = document.getElementById('currentLang');
    lang.textContent = "KZ";
}


// OPENING FAQS ANSWER
const faqs = document.querySelectorAll('.tutor-faq-item');

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})


//CHOOSING ONE OPTION ON LIST
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});



