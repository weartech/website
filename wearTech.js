// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyNavbar(); stickySidebar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar(){
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var sidebar = document.getElementById("sidebar");
var sticky2 = sidebar.offsetTop;

function stickySidebar(){
  if (window.pageYOffset >= sticky2) {
    sidebar.classList.add("sticky2")
  } else{
    sidebar.classList.remove("sticky2");
  }
}