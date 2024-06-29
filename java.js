const images = [
     'bgff2.jpeg',
    'bgff2.jpeg',
    'fam2.jpeg', 
    'fit.jpg',
    'mazda.jpg',
    'supra.jpg',
   
];

let currentIndex = 0;

function updateimg(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    document.getElementById('sliderImg').src = images[currentIndex];
}



/*para searchbar*/ 

const titles = [
    "1999 nissan skyline gt-r r34",
    "1994 toyota supra mk IV",
    "1970 dodge charger R/T",
    "1995 mitsubishi eclipse",
    "flip cars",
];

const links = [
    "#1999-nissan-skyline-gt-r-r34",
    "#1994-toyota-supra-mk-IV",
    "#1970-dodge-charger-R/T",
    "#1995-mitsubishi-eclipse",
    "#flip-cars",
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
            alert('Wala dito yan pare');
        }
    });
}

document.addEventListener('DOMContentLoaded', search);
;
