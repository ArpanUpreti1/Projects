document.addEventListener('DOMContentLoaded', function () {

    const fullName = localStorage.getItem('fullname');
    const email = localStorage.getItem('email');

    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = `Hello, ${fullName} !`;
});
