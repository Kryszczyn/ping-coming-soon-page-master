const input = document.querySelector("input"),
    btn = document.querySelector(".input__container > button"),
    errorMessage = document.querySelector(".error__message");

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

btn.addEventListener("click", () => {
    if(!validateEmail(input.value)){
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }
});