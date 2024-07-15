const swiper = new Swiper(".swiper", {
    direction:"horizontal",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidePerView: "auto",
    spaceBetween:10,
    breakPoints:{
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: "auto"
        }
    }
})

const hideSection = document.querySelector(".hide.section");

let lastKnownScrollPosition = (actualScrollPosition) => {
    if (actualScrollPosition > 100) {
        hideSection.classList.remove(".hide-section")
    }
    }

    document.addEventListener("scroll", () => {
        lastKnownScrollPosition = window.scrollY;
        showSection(lastKnownScrollPosition)
    })