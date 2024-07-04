/*===== Redimensionner la barre de navigation lors du défilement =====*/
var navbar = document.querySelector(".navbar");
// Lorsque le défilement est supérieur à 20 px, il ajoute la classe sticky à la balise et enlève la classe sticky si le défilement est inférieur à 20 px
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
/*===== Basculeur de navigation =====*/
const navMenu = document.querySelector(".menu");
navToggle = document.querySelector(".menu-btn");
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}
// Fermeture du menu lorsque le lien est cliqué pour mobile
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
/*===== Lien actif de la section de défilement =====*/

const Section = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset
    Section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
        }
        else {
            document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*===== Animation de compétences =====*/
const skills_wrap = document.querySelector(".about-skills"),
    skills_bar = document.querySelectorAll(".progress-line");
window.addEventListener("scroll", () => {
    skillsEffect();
})
// Chaque fois que nous faisons défiler la vérification, nous avons dépassé les compétences ou non
function checkScroll(el) {
    // Obtenir la première position des compétences par rapport au port de visualisation, en d'autres termes, nous devons obtenir
    // Quantité de pixels entre les compétences et le bord supérieur de la fenêtre.
    let rect = el.getBoundingClientRect();
    // Après avoir connu la quantité de pixels entre le bord supérieur des compétences et le bord supérieur de la fenêtre
    // Maintenant nous allons vérifier si nous avons dépassé le bord inférieur des compétences ou non
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}
function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
}
/*===== Portfolio Item Filter =====*/
const FilterContainer = document.querySelector(".portfolio-filter"),
    filterBtns = FilterContainer.children;
totalFilterBtn = filterBtns.length;
PortfolioItems = document.querySelectorAll(".portfolio-item"),
    totalportfolioItem = PortfolioItems.length;
for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        FilterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter")
        for (let k = 0; k < totalportfolioItem; k++) {
            if (filterValue === PortfolioItems[k].getAttribute("data-category")) {
                PortfolioItems[k].classList.remove("hide");
                PortfolioItems[k].classList.add("show");
            }
            else {
                PortfolioItems[k].classList.remove("show");
                PortfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                PortfolioItems[k].classList.remove("hide");
                PortfolioItems[k].classList.add("show");
            }
        }
    })
}
/*===== Lightbox =====*/
const lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxClose = lightbox.querySelector(".lightbox-close"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;
for (let i = 0; i < totalportfolioItem; i++) {
    PortfolioItems[i].addEventListener("click", function () {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}
function nextItem() {
    if (itemIndex == totalportfolioItem - 1) {
        itemIndex = 0;
    }
    else {
        itemIndex++
    }
    changeItem();
}
function prevItem() {
    if (itemIndex == 0) {
        itemIndex = totalportfolioItem - 1;
    }
    else {
        itemIndex--
    }
    changeItem();
}
function toggleLightbox() {
    lightbox.classList.toggle("open");
}
function changeItem() {
    imgSrc = PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = PortfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " sur " + totalportfolioItem;
}
// close lightbox
lightbox.addEventListener("click", function (event) {
    if (event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox()
    }
})