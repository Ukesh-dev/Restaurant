AOS.init({
  once: true,
  duration : 1000,
  interval: 1000,
});

const navMenu = document.querySelector('.nav__menu');
const toggle = document.querySelector('.nav__toggle');
const section = document. querySelectorAll('section[id]');
const scrollTop = document.querySelector('.scroll__top');
console.log(section);
const navLink = document.querySelectorAll('.nav__link');
const darkTheme = document.querySelector(".toggle__container")
const loader = document.querySelector(".loading-container");
const main = document.querySelector('.main-content');

window.addEventListener("scroll", scrollActive)


function loading(){
// setTimeout(()=> {
  loader.style.opacity = '0';
  loader.style.display = 'none';
  document.body.classList.remove('scrollable');
// },4000)
}


const setTheme= () => {

  if(mode == 'dark-Theme'){
    darkTheme.classList.remove('show');
    document.body.classList.add('dark-theme');
  }
  else{
    darkTheme.classList.add('show')
    document.body.classList.add('light-theme');
  }
}

let mode = localStorage.getItem("theme");
 mode ? setTheme() : localStorage.setItem("theme", 'light-theme');

darkTheme.addEventListener("click", () => {
  
  darkTheme.classList.toggle("show");
  document.body.classList.toggle("dark-theme");
  if(darkTheme.classList.contains('show')){
    localStorage.setItem("theme", 'light-theme');
 
    
    
  }
  else{
    localStorage.setItem('theme', 'dark-Theme');
 
  }
})




function scrollActive(){
    const scrollY = window.pageYOffset;

    section.forEach((current) => {
        const sectionHeight= current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
          ){
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active");
          } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active");
          }
    })

    if(scrollY > 200){
        scrollTop.classList.add('show')
    }
    else{
        scrollTop.classList.remove('show');
    }


}
// darkTheme.addEventListener(("click"), () => {
//   document.body.classList.toggle('dark-theme');
//   darkTheme.classList.toggle("show");
// })

toggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("show-menu");
    navLink.forEach((link) => {
      link.addEventListener('click', () => {

        navMenu.classList.remove('show-menu');
      })
    })
    
})

