fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    const countries = data.map(country => country.name.common);

    countries.sort();

    populateDropdown('flying-from', countries);
    populateDropdown('flying-to', countries);
})
.catch(error => {
    console.error('Error fetching countries:', error);
});

function populateDropdown(elementId, countries) {
const selectElement = document.getElementById(elementId);

countries.forEach(country => {
    const option = document.createElement('option');
    option.text = country;
    selectElement.appendChild(option);
});
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  const bookingForm = document.getElementById("booking-form");
  const fromCountryInput = document.getElementById("from-country");
  const toCountryInput = document.getElementById("to-country");
  const fromDateInput = document.getElementById("from-date");
  const toDateInput = document.getElementById("to-date");

  bookingForm.addEventListener("submit", function(event) {
    let isValid = true;
    
    // Clear previous error messages
    clearErrors();

    // Validate "From" and "To" countries
    if (fromCountryInput.value.trim() === "") {
      displayError("from-country-error", "From Country is required.");
      isValid = false;
    }

    if (toCountryInput.value.trim() === "") {
      displayError("to-country-error", "To Country is required.");
      isValid = false;
    }

    // Validate date range
    const fromDate = new Date(fromDateInput.value);
    const toDate = new Date(toDateInput.value);

    if (fromDate > toDate) {
      displayError("from-date-error", "From Date cannot be after To Date.");
      isValid = false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const threeMonthsFromNow = new Date(today);
    threeMonthsFromNow.setMonth(today.getMonth() + 3);

    if (fromDate < today) {
      displayError("from-date-error", "From Date cannot be a past date.");
      isValid = false;
    }

    if (toDate > threeMonthsFromNow) {
      displayError("to-date-error", "To Date cannot be more than 3 months in the future.");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function displayError(errorId, errorMessage) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = errorMessage;
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function(errorElement) {
      errorElement.textContent = "";
    });
  }
});



