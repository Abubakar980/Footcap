var icon = document.getElementById("icon")

icon.onclick=function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src="images/sun.png"
    }
    else{
        icon.src="images/moon.png"
    }
}




const navbar = document.getElementById('navbar');
let hideNavbarTimeout;

// Function to hide navbar after a delay
function hideNavbar() {
  hideNavbarTimeout = setTimeout(() => {
    navbar.classList.add('hidden-navbar'); // Add class to hide
  }, 1000); // 2-second delay before hiding
}

// Show navbar when mouse enters the navbar area
navbar.addEventListener('mouseenter', () => {
  clearTimeout(hideNavbarTimeout); // Cancel hiding if the mouse enters
  navbar.classList.remove('hidden-navbar'); // Show navbar
});

// Hide navbar after mouse leaves navbar area (with a delay)
navbar.addEventListener('mouseleave', hideNavbar);

// Initial hide after page load
hideNavbar();
