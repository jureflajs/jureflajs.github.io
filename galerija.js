document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");
    const numberOfImages = 25;
    const imagePath = "galerija/";

    for (let i = 1; i <= numberOfImages; i++) {
        let img = document.createElement("img");
        img.src = `${imagePath}image (${i}).jpg`;
        img.alt = `Image ${i}`;  
        gallery.appendChild(img);
    }
});
