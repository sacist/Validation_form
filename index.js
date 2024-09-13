const FirstName=document.getElementById('First_Name')

const PhoneNumber=document.getElementById('Phone_Number')

const EMail=document.getElementById('EMail')

const errorMessage1=document.querySelector('.error1')
const errorMessage2=document.querySelector('.error2')
const errorMessage3=document.querySelector('.error3')


const validInputName= /^[a-zA-Zа-яА-ЯёЁ\s]*$/
const validInputPhone= /^\+?\d*$/



const validator=(element,errorElement,validationfunc,errorMessageWrongInput,errorMessageEmptyString)=>{
    element.addEventListener("blur",(e)=>{
        if(!validationfunc(element.value)){
            errorElement.textContent=errorMessageWrongInput
        }
        else if(element.value===''){
            errorElement.textContent=errorMessageEmptyString
        }
    })
    element.addEventListener('input',()=>{
        errorElement.textContent=``
    })
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
)

validator(
    EMail,
    errorMessage3,
    ()=>EMail.validity.valid,
    `Это не ${EMail.getAttribute('placeholder')}`,
    `Поле ${EMail.getAttribute('placeholder')} не должно быть пустым`
)