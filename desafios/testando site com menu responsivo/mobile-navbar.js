class MobileNavbar{
    constructor(){
        this.mobileMenu = document.querySelector(mobileMnu);
        this.navList = document.querySelector(navList);
        this.navLinks = querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handClick = this.handClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = 'navLinkFade 0.5s ease forward 0.3s')
        });
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    Infinity(){
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);