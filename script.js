const nameEl = document.getElementById('name')
const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')
const messageEl = document.getElementById('message')
const confirmPasswordEl = document.getElementById('confirm-password')
const errorMsgEl = document.querySelectorAll('.error-msg')
const formEl = document.getElementById('contact-form')
const successMsg = document.getElementById('success-msg')

let isValid = true

function checkEmpty(){
    isValid = true;
    let nameInput = nameEl.value.trim()
    let emailInput = emailEl.value.trim()
    let passwordInput = passwordEl.value.trim()
    let confirmPasswordInput = confirmPasswordEl.value.trim()
    let messageInput = messageEl.value.trim()

    if(!nameInput){
        errorMsgEl[0].style.visibility = 'visible'
        errorMsgEl[0].textContent = 'Enter your full name'
        isValid = false
    }else{
        errorMsgEl[0].style.visibility = 'hidden'
    }

    if(!emailInput){
        errorMsgEl[1].style.visibility = 'visible'
        errorMsgEl[1].textContent = 'Enter your email address'
        isValid = false
    }else{
        emailFormat()
    }

    if(!passwordInput){
        errorMsgEl[2].style.visibility = 'visible'
        errorMsgEl[2].textContent = 'Enter your password'
        isValid = false
    }else{
        lengthCheck()
    }

    if(!confirmPasswordInput){
        errorMsgEl[3].style.visibility = 'visible'
        errorMsgEl[3].textContent = 'Enter your confirm password'
        isValid = false
    }else{
        matchPassword()
    }

    if(!messageInput){
        errorMsgEl[4].style.visibility = 'visible'
        errorMsgEl[4].textContent = 'Enter your complementary message'
        isValid = false
    }else{
        errorMsgEl[4].style.visibility = 'hidden'
    }

    if(isValid){
        console.log('form is valid')
    }else{
        console.log('form is not valid');
    }
}

function lengthCheck(){
    let passwordInput = passwordEl.value

    if(passwordInput.length < 8){
        errorMsgEl[2].style.visibility = 'visible'
        errorMsgEl[2].textContent = 'Password must be at least 8 characters'
        isValid = false
    }else if(passwordInput.length > 12){
        errorMsgEl[2].style.visibility = 'visible'
        errorMsgEl[2].textContent = 'Password must not be more than 12 characters'
        isValid = false
    }else {
        passwordStrength()
    }
}

function emailFormat(){
    let emailInput = emailEl.value
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailRegex.test(emailInput)){
        errorMsgEl[1].style.visibility = 'hidden'
    }else{
        errorMsgEl[1].style.visibility = 'visible'
        errorMsgEl[1].textContent = 'Enter a valid email address'
        isValid = false
    }
}

function passwordStrength(){
    let passwordInput = passwordEl.value.trim()
    const hasUpperCase = /[A-Z]/
    const hasLowerCase = /[a-z]/
    const hasNumber = /[0-9]/
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/

    if(!hasUpperCase.test(passwordInput)){
        errorMsgEl[2].style.visibility = 'visible'
        errorMsgEl[2].textContent = 'Password must contain an uppercase/capital letter character'
        isValid = false
    }else if(!hasLowerCase.test(passwordInput)){
        errorMsgEl[2].style.visibility = 'visible'
        errorMsgEl[2].textContent = 'Password must contain a lowercase/small-letter character'
        isValid = false
    }else if(!hasNumber.test(passwordInput)){
        errorMsgEl[2].style.visibility = 'visible'
        errorMsgEl[2].textContent = 'Password must contain a number'
        isValid = false
    }else if(!hasSpecialChar.test(passwordInput)){
        errorMsgEl[2].style.visibility = 'visible'
        errorMsgEl[2].textContent = 'Password must contain a special character'
        isValid = false
    }else {
        errorMsgEl[2].style.visibility = 'hidden'
    }
}

function matchPassword(){
    let passwordInput = passwordEl.value.trim()
    let confirmPasswordInput = confirmPasswordEl.value.trim()

    if(!passwordInput){
        errorMsgEl[3].style.visibility = 'visible'
        errorMsgEl[3].textContent = 'Enter password first'
        isValid = false
    }else if(passwordInput !== confirmPasswordInput){
        errorMsgEl[3].style.visibility = 'visible'
        errorMsgEl[3].textContent = 'Password does not match'
        isValid = false
    }else{
        errorMsgEl[3].style.visibility = 'hidden'
    }
}

formEl.addEventListener('submit', function(event){
    event.preventDefault()
    checkEmpty()

    if(isValid){
        successMsg.style.visibility = 'visible'
        successMsg.textContent = 'Form Submitted successfully'
        formEl.reset()
    }else{
        successMsg.style.visibility = 'visible'
        successMsg.style.color = 'red'
        successMsg.textContent = 'Form not submitted check your inputs'
    }
})

nameEl.addEventListener('blur',function(){
    let nameInput = nameEl.value.trim()

    if(!nameInput){
        errorMsgEl[0].style.visibility = 'visible'
        errorMsgEl[0].textContent = 'Enter your full name'
    }
})

nameEl.addEventListener('input',function(){
    let nameInput = nameEl.value.trim()

    if(nameInput){
        errorMsgEl[0].style.visibility = 'hidden'
    }
})

emailEl.addEventListener('blur', function(){
    let emailInput = emailEl.value.trim()

    if(!emailInput){
        errorMsgEl[1].style.visibility = 'visible'
        errorMsgEl[1].textContent = 'Enter your email address'
    }else {
        emailFormat()
    }
})

emailEl.addEventListener('input', function(){
    let emailInput = emailEl.value.trim()

    if(emailInput){
        emailFormat()
    }
})

passwordEl.addEventListener('blur', function(){
    let passwordInput = passwordEl.value.trim()

    if(!passwordInput){
        errorMsgEl[2].style.visibility = 'visible'
        errorMsgEl[2].textContent = 'Enter your password'
    }else{
        lengthCheck()
    }
})

passwordEl.addEventListener('input', function(){
    let passwordInput = passwordEl.value.trim()
    let confirmPasswordInput = confirmPasswordEl.value.trim()

    if(passwordInput){
        lengthCheck()
    }

    if(confirmPasswordInput && passwordInput !== confirmPasswordInput){
        errorMsgEl[3].style.visibility = 'visible'
        errorMsgEl[3].textContent = 'Passwords no longer match'
    }else if(confirmPasswordInput){
        errorMsgEl[3].style.visibility = 'hidden'
    }
})

confirmPasswordEl.addEventListener('blur', function(){
    let confirmPasswordInput = confirmPasswordEl.value.trim()

    if(!confirmPasswordInput){
        errorMsgEl[3].style.visibility = 'visible'
        errorMsgEl[3].textContent = 'Enter your confirm password'
    }
})

confirmPasswordEl.addEventListener('input', function(){
    let confirmPasswordInput = confirmPasswordEl.value.trim()
    let passwordInput = passwordEl.value.trim()

    if(confirmPasswordInput){
        matchPassword()
    }
})

