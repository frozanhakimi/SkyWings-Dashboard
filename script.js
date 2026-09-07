
const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerDropdown = document.getElementById('hamburgerDropdown');

hamburgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    hamburgerDropdown.classList.toggle('show');
});


function selectOption(event) {
    event.preventDefault();
    hamburgerDropdown.classList.remove('show');
}
 
document.addEventListener('click', function(e) {
    if (!hamburgerBtn.contains(e.target) && !hamburgerDropdown.contains(e.target)) {
        hamburgerDropdown.classList.remove('show');
    }
});

// search dropdown
const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');

searchInput.addEventListener('input', function() {
    if (this.value.trim().length > 0) {
        searchDropdown.classList.add('show');
    } else {
        searchDropdown.classList.remove('show');
    }
});

document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.remove('show');
    }
});
