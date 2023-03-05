console.log("125")

document.addEventListener("DOMContentLoaded", () => {  
  let menuBtn = document.querySelector('.nav-burger');
  let menu = document.querySelector('.nav-burger-list');
  
  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })

  menu.addEventListener('click', function() {
    menu.classList.toggle('active');
  })
});