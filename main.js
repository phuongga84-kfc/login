function login(){
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
}

function register(){
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
    const passwordFields = document.querySelectorAll("input[type='password']");
    const toggleIcons = document.querySelectorAll(".toggle-icon");

    passwordFields.forEach((passwordInput, index) => {
        const toggleIcon = toggleIcons[index];

        passwordInput.addEventListener("input", () => {
            if (passwordInput.value.length > 0) {
                toggleIcon.classList.replace("bxs-lock-alt", "bxs-show");
            } else {
                toggleIcon.classList.replace("bxs-show", "bxs-lock-alt");
                toggleIcon.classList.replace("bxs-hide", "bxs-lock-alt");
            }
        });

        toggleIcon.addEventListener("click", () => {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                toggleIcon.classList.replace("bxs-show", "bxs-hide");
            } else {
                passwordInput.type = "password";
                toggleIcon.classList.replace("bxs-hide", "bxs-show");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginBox = document.getElementById("login");
    const registerBox = document.getElementById("register");

    function showLogin() {
        registerBox.style.opacity = "0";
        registerBox.style.transform = "scale(0.9)";
        setTimeout(() => {
            registerBox.style.display = "none";
            loginBox.style.display = "flex";
            setTimeout(() => {
                loginBox.style.opacity = "1";
                loginBox.style.transform = "scale(1)";
            }, 50);
        }, 300);
    }

    function showRegister() {
        loginBox.style.opacity = "0";
        loginBox.style.transform = "scale(0.9)";
        setTimeout(() => {
            loginBox.style.display = "none";
            registerBox.style.display = "flex";
            setTimeout(() => {
                registerBox.style.opacity = "1";
                registerBox.style.transform = "scale(1)";
            }, 50);
        }, 300);
    }

    window.login = showLogin;
    window.register = showRegister;
});
