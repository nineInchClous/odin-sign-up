const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pswd = document.getElementById("password");
const confirmPswd = document.getElementById("confirm-password");

function validate(element, condition) {
    if (condition) {
        element.classList.add("invalid");
        element.classList.remove("valid");
    } else {
        element.classList.add("valid");
        element.classList.remove("invalid");
    }
}

firstName.addEventListener("blur", () => validate(firstName, firstName.value.length < 3 || firstName.value.length > 50));
lastName.addEventListener("blur", () => validate(lastName, lastName.value.length < 3 || lastName.value.length > 50));
email.addEventListener("blur", () => validate(email, !email.value.includes("@")));
phone.addEventListener("blur", () => validate(phone, phone.value.length < 5));
pswd.addEventListener("blur", () => {
    validate(pswd, pswd.value.length < 8);
    if (pswd.value != confirmPswd.value) {
        pswd.classList.add("invalid");
        pswd.classList.remove("valid");
        confirmPswd.classList.add("invalid");
        confirmPswd.classList.remove("valid");
    }
});
confirmPswd.addEventListener("blur", () => {
    validate(confirmPswd, confirmPswd.value.length < 8);
    if (pswd.value != confirmPswd.value) {
        pswd.classList.add("invalid");
        pswd.classList.remove("valid");
        confirmPswd.classList.add("invalid");
        confirmPswd.classList.remove("valid");
    }
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    validate(firstName, firstName.value.length < 3 || firstName.value.length > 50);
    validate(lastName, lastName.value.length < 3 || lastName.value.length > 50);
    validate(email, !email.value.includes("@"));
    validate(phone, phone.value.length < 5);
    validate(pswd, pswd.value.length < 8);
    validate(confirmPswd, confirmPswd.value.length < 8);

    if (pswd.value != confirmPswd.value) {
        pswd.classList.add("invalid");
        pswd.classList.remove("valid");
        confirmPswd.classList.add("invalid");
        confirmPswd.classList.remove("valid");
    }
});