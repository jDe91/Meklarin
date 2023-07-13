const currentYear = document.getElementById('current-year');

function displayYear() {
    currentYear.innerHTML = new Date().getFullYear();
}

displayYear();