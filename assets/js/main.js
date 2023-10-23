const navMenu = document.querySelector(".nav-menu-bar");

navMenu.addEventListener('click', () => {
    const headerMenu = document.querySelector("ul.header-menu");
    const navIcon = document.querySelectorAll(".navIcon");
    headerMenu.classList.toggle("show");

    navIcon.forEach(icon => {
        icon.classList.toggle("hidden")
    })
})

function navFixed(){
    const header_dom = document.querySelector('.header');
    const nav_offset_top = header_dom.clientHeight + 50;

    window.addEventListener("scroll", () => {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;

        if(scroll >= nav_offset_top){
            header_dom.classList.add('nav-fixed')
        }

        else {
            header_dom.classList.remove('nav-fixed')
        }
    });
}

navFixed();