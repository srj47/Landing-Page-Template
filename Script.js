// menu hide and show
const menu = document.querySelector(".menu");
menu.addEventListener("click", togleSidebar);
const sidebar = document.querySelector(".sidebar");

function togleSidebar() {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        console.log('active class removed');
        
    } else {
        sidebar.classList.add('active');
        console.log('active class added');
    }
}

// slider scrolling
function scrollRight() {
    var slider = document.querySelector(".slider");
    slider.scrollBy({
        top: 0,
        left: 100,
        behavior: "smooth",
    });
    console.log('right scroll');
    
}