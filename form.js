const form = document.querySelector("form")
const fullName = document.getElementById("fullname")
const service = document.getElementById("service")
const dateTime = document.getElementById("date-time")
const email = document.getElementById("email")
const phone = document.getElementById("phone-no")
const payment = document.getElementById("Payment")
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
    if (validateInputs()) {
        sendEmail()
       localStorage.setItem('fullname',fullName.value.trim())
    
        localStorage.setItem('email',email.value.trim())
        setTimeout(()=>{
            window.location.href = 'greeting.html';
        },2000)
    }
});

const error = (element,message)=>{
    const inputControl = element.parentElement;
    const errorController = inputControl.querySelector('.error')
    errorController.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('sucess')
}
const success = (element)=>{
    const inputControl = element.parentElement;
    const errorController = inputControl.querySelector('.error')
    errorController.innerText = ''
    inputControl.classList.add('sucess')
    inputControl.classList.remove('error')

}
const validateInputs = () => {
    let isValid = true;
    const fullNameValue = fullName.value.trim();
    const serviceValue = service.value;
    const dateTimeValue = dateTime.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const paymentValue = payment.value;

    if (fullNameValue === "") {
        error(fullName, "Full Name is required");
        isValid = false;
    } else {
        success(fullName);
    }

    if (serviceValue === "") {
        error(service, "Please select a service");
        isValid = false;
    } else {
        success(service);
    }

    if (dateTimeValue === "") {
        error(dateTime, "Date and Time are required");
        isValid = false;
    } else {
        success(dateTime);
    }

    if (emailValue === "") {
        error(email, "Email is required");
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        error(email, "Provide a valid email address");
        isValid = false;
    } else {
        success(email);
    }

    if (phoneValue === "") {
        error(phone, "Phone Number is required");
        isValid = false;
    } else if (!isValidPhone(phoneValue)) {
        error(phone, "Provide a valid phone number");
        isValid = false;
    } else {
        success(phone);
    }

    if (paymentValue === "") {
        error(payment, "Please select a payment method");
        isValid = false;
    } else {
        success(payment);
    }
    return isValid
};
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
    const nepaliPhonePattern = /^(98|97|96)\d{8}$/;

    if (nepaliPhonePattern.test(phone)) {
        return true;  
    } else {
        return false; 
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const serviceSelect = document.getElementById('service');
    const priceDisplay = document.getElementById('price-display');

    serviceSelect.addEventListener('change', function () {
        const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
        const price = selectedOption.getAttribute('data-price');

        if (price) {
            priceDisplay.textContent = `: Rs. ${price}`;
        } else {
            priceDisplay.textContent = 'Select a service';
        }
    });
});
function sendEmail(){
  var parms = {
    name: fullName.value,
    email: email.value,
    service: service.value
  }
  console.log(parms)
  const serivceID = "service_t8g1ftl"
  const templateId = "template_uipi00m"
  emailjs
  .send(serivceID,templateId,parms)
  .then(
    res =>{
        document.getElementById("fullname").value = ""
        document.getElementById("service").value = ""
        document.getElementById("email").value = ""
        console.log(res)
        alert("Booking Sucessfull")
    }
  )
  .catch((err)=>console.log(err))
}