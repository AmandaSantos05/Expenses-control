function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function login() {
    firebase.auth().signInWithEmailAndPassword("any@email.com", "123456").then(response => {
        console.log('success', response)
    }).catch(error => {
        console.log('error', error)
    });
    //window.location.href = "pages/home/home.html"
}

function register() {
    window.location.href = "pages/register/register.html"
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email)
}

function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const EmailValid = isEmailValid();
    form.recoverPassword().disabled = !EmailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !EmailValid || !passwordValid;
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

const form = {
    email: () => document.getElementById("email"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPassword: () => document.getElementById("recover-password-button")

}