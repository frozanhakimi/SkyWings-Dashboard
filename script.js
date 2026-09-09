const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerDropdown = document.getElementById('hamburgerDropdown');
const supportCard = document.querySelector('.support-card');


// Hamburger Menu 
hamburgerBtn.addEventListener('click', function (e) { 
    e.stopPropagation(); 
    hamburgerDropdown.classList.toggle('show'); 
}); 

function selectOption(event) { 
    event.preventDefault(); 
    hamburgerDropdown.classList.remove('show'); 
} 


// Search Dropdown 
const searchInput = document.getElementById('searchInput'); 
const searchDropdown = document.getElementById('searchDropdown'); 

searchInput.addEventListener('input', function () { 
    if (this.value.trim().length > 0) { 
        searchDropdown.classList.add('show'); 
    } else { 
        searchDropdown.classList.remove('show'); 
    } 
}); 


// Close Dropdowns When Clicking Outside 
document.addEventListener('click', function (e) { 

    if (!hamburgerBtn.contains(e.target) && 
        !hamburgerDropdown.contains(e.target)) { 
        hamburgerDropdown.classList.remove('show'); 
    } 

    if (!searchInput.contains(e.target) && 
        !searchDropdown.contains(e.target)) { 
        searchDropdown.classList.remove('show'); 
    } 

}); 

// Sidebar Active State
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {

        menuLinks.forEach(function (item) {
            item.classList.remove('active');
        });

        link.classList.add('active');
    });
});


// Help Box 
supportCard.addEventListener('click', function () { 
    window.open('mailto:hakimifrozan0@gmail.com.com', '_self'); 
});