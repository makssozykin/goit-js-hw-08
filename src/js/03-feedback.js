import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

returnArea();

form.addEventListener('input', throttle(onLoad, 500));
form.addEventListener("submit", onSubmit);

function onSubmit(e) { 
    e.preventDefault();
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    const user = JSON.parse(savedData);
    console.log(user);
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onLoad(e) { 
    const value = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(value));
}

function returnArea() {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    const user = JSON.parse(savedData);
    if (savedData) { 
        form.elements.email.value = user.email;
        form.elements.message.value = user.message;
    }
}

