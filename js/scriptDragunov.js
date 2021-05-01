console.log("Cześć!");


let button = document.querySelector(".section__buttonPhotos");
let images = document.querySelector(".image__gallery");

button.addEventListener("click", () => {
    button.innerText = images.classList.toggle("image__hidden") ? "Pokaż zdjęcia" : "Ukryj zdjęcia";
});

