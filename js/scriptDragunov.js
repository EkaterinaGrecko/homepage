{
    const welcome = () => {
        console.log("Cześć!");
    }


    const toggleShowHideImages = () => {
        const button = document.querySelector(".js-ShowHidePhotosButton");
        const images = document.querySelector(".js-images");
        button.innerText = images.classList.toggle("image__gallery--hidden") ? "Pokaż zdjęcia" : "Ukryj zdjęcia";
    };


    const init = () => {
        const button = document.querySelector(".js-ShowHidePhotosButton");
        button.addEventListener("click", toggleShowHideImages);
    };

    init();

    welcome();

}