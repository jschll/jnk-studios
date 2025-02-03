// document.addEventListener("DOMContentLoaded", () => {
//     fetch("slides.json")
//         .then((response) => response.json())
//         .then((data) => {
//             const swiperWrapper = document.querySelector(".swiper-wrapper");
//             swiperWrapper.innerHTML = ""; // Vorherige Inhalte löschen
//
//             data.forEach((slide) => {
//                 const slideElement = document.createElement("div");
//                 slideElement.classList.add("swiper-slide", "slider-body");
//                 slideElement.innerHTML = `<img src="${slide.image}" alt="${slide.text}" class="slider-img">`;
//                 swiperWrapper.appendChild(slideElement);
//             });
//         })
//         .catch((error) => console.error("Fehler beim Laden der JSON:", error));
// });
