let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("car-image");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', (event) => {
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("car-image");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
});

function playmusic() {
  const audio = document.getElementById('audio');
  audio.muted = false;
  audio.play();
}

const titles = [
    "fast and the furious",
    "2 fast 2 furious",
    "the fast and the furious tokyo drift",
    "fast and furious",
    "fast five",
    "fast and furious 6",
    "furious 7",
    "the fate of the furious",
    "f9",
    "fast x",
    "fast and furious 11"
];

const links = [
    "#fast-and-the-furious",
    "#2-fast-2-furious",
    "#the-fast-and-the-furious-tokyo-drift",
    "#fast-and-furious",
    "#fast-five",
    "#fast-and-furious-6",
    "#furious-7",
    "#the-fate-of-the-furious",
    "#f9",
    "#fast-x",
    "#fast-and-furious-11"
];

function search() {
    document.getElementById('searchEngine').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const searchInput = document.getElementById("searchBar").value.trim().toLowerCase();
        
        const index = titles.findIndex(function(title) {
            return title.toLowerCase() === searchInput;
        });

        if (index !== -1) {
            window.location.href = links[index];
        } else {
            alert('Trailer not found');
        }
    });
}

document.addEventListener('DOMContentLoaded', search);
