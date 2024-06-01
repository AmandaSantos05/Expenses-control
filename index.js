function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
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

    if (validateEmail(email)) {
        form.emailInvalidError().style.display = "none";
    } else {
        form.emailInvalidError().style.display = "block";
    }
}

function togglePasswordErrors() {
    const password = form.password().value;
    if (!password) {
        form.passwordRequireError().style.display = "block"
    } else {
        form.passwordRequireError().style.display = "none"

    }
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

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}

const form = {
    email: () => document.getElementById("email"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequireError: () => document.getElementById("password-required-error"),
    recoverPassword: () => document.getElementById("recover-password-button")

}