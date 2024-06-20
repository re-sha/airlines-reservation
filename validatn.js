
const validateEmail = () => {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const errorElement = document.getElementById('email-error');

    if (!emailRegex.test(emailValue)) {
        errorElement.textContent = 'Invalid email format';
        errorElement.style.display = 'block';
    } else {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
};


const validatePhone = () => {
    const phoneInput = document.getElementById('mob-number');
    const phoneValue = phoneInput.value;
    const phoneRegex = /^\d{10}$/; 

    const errorElement = document.getElementById('mob-error');

    if (!phoneRegex.test(phoneValue)) {
        errorElement.textContent = 'Invalid phone number format';
        errorElement.style.display = 'block';
    } else {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
};


const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('mob-number');

emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);


const validateDates = () => {
    const departureDateInput = document.getElementById('departure-date');
    const returnDateInput = document.getElementById('return-date');
    const departureDate = new Date(departureDateInput.value);
    const returnDate = new Date(returnDateInput.value);

    const today = new Date();
    const maxDate = new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000); // 90 days in the future

    const departureError = document.getElementById('departure-error');
    const returnError = document.getElementById('return-error');

    if (departureDate < today) {
        departureError.textContent = '  Invalid date selection';
        departureError.style.display = 'block';
    } else {
        departureError.textContent = '';
        departureError.style.display = 'none';
    }

    if (departureDate > returnDate) {
        returnError.textContent = 'Return date cannot be before departure date';
        returnError.style.display = 'block';
    } else if (departureDate > maxDate || returnDate > maxDate) {
        returnError.textContent = 'Dates should be within 90 days from today';
        returnError.style.display = 'block';
    } else {
        returnError.textContent = '';
        returnError.style.display = 'none';
    }
};


const departureDateInput = document.getElementById('departure-date');
const returnDateInput = document.getElementById('return-date');

departureDateInput.addEventListener('input', validateDates);
returnDateInput.addEventListener('input', validateDates);
