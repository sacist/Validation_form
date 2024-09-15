const FirstName = document.getElementById('First_Name');

const PhoneNumber = document.getElementById('Phone_Number');

const EMail = document.getElementById('EMail');

const form = document.querySelector('form');

const errorMessage1 = document.querySelector('.error1');
const errorMessage2 = document.querySelector('.error2');
const errorMessage3 = document.querySelector('.error3');

const validInputName = /^[a-zA-Zа-яА-ЯёЁ]*$/;
const validInputPhone = /^\+?\d{6,}$/;

const validator = (element, errorElement, validationFunc, errorMessageWrongInput, errorMessageEmptyString) => {
    const validate = () => {
        if (element.value === '') {
            errorElement.textContent = errorMessageEmptyString;
            element.classList.add('redBorder');
            return true;
        } 
        else if (!validationFunc(element.value)) {
            errorElement.textContent = errorMessageWrongInput;
            element.classList.add('redBorder');
            return true;
        } 
    };

    element.addEventListener('blur', validate);

    element.addEventListener('input', () => {
        errorElement.textContent = '';
        element.classList.remove('redBorder');
    });

    form.addEventListener('submit', (event) => {
        if (validate()) {
            event.preventDefault();
        }
    });
}

validator(
    FirstName,
    errorMessage1,
    (value) => validInputName.test(value),
    `Это не ${FirstName.getAttribute('placeholder')}`,
    `Поле ${FirstName.getAttribute('placeholder')} не должно быть пустым`
);

validator(
    PhoneNumber,
    errorMessage2,
    (value) => validInputPhone.test(value),
    `Это не ${PhoneNumber.getAttribute('placeholder')}`,
    `Поле ${PhoneNumber.getAttribute('placeholder')} не должно быть пустым`
);

validator(
    EMail,
    errorMessage3,
    () => EMail.validity.valid,
    `Это не ${EMail.getAttribute('placeholder')}`,
    `Поле ${EMail.getAttribute('placeholder')} не должно быть пустым`
);
