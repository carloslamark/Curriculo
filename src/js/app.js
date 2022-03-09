window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var taskbar = document.querySelector(".taskbar");
    header.classList.toggle("sticky", window.scrollY>100)
})

