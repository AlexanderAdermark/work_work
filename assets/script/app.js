// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const hamburger = document.queryselector(".hamburger");
const navMenu = document.queryselector(".nav-Menu");

hamburger.addEventListener("click", () =>{
  hamburger.classlist.toggle("active");
  navMenu.classlist.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n,addEventListener("click",()=>{
  hamburger.classlist.remove("active");
  navMenu.classlist.remove("active");
}))