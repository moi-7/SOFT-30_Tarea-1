const USERS = [
    {
        usuario: "admin",
        email: "admin@correo.com",
        clave: "admin",
    },
    {
        usuario: "moises",
        email: "moises@correo.com",
        clave: "admin",
    },
    {
        usuario: "superadmin",
        email: "superadmin@correo.com",
        clave: "admin1234",
    },
];

const STORAGE_KEYS = {
    LOGGED_IN: "isLoggedIn",
    USER: "currentUser",
};

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
});

const signInForm = document.querySelector(".signin-form");

if (signInForm) {
    signInForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailOrUser = document
            .getElementById("email")
            .value
            .trim();

        const password = document.getElementById("password").value;

        const rememberMe = document.getElementById("remember").checked;

        const userFound = USERS.find(({ usuario, email, clave }) =>
            (usuario === emailOrUser || email === emailOrUser) &&
            clave === password
        );

        if (!userFound) {
            Toast.fire({
                icon: "error",
                title: "Incorrect username or password.",
            });

            return;
        }

        // Remove any previous login
        localStorage.removeItem(STORAGE_KEYS.LOGGED_IN);
        localStorage.removeItem(STORAGE_KEYS.USER);

        sessionStorage.removeItem(STORAGE_KEYS.LOGGED_IN);
        sessionStorage.removeItem(STORAGE_KEYS.USER);

        // Save the new login
        const storage = rememberMe ? localStorage : sessionStorage;

        storage.setItem(STORAGE_KEYS.LOGGED_IN, "true");
        storage.setItem(STORAGE_KEYS.USER, userFound.usuario);

        Toast.fire({
            icon: "success",
            title: `Welcome, ${userFound.usuario}!`,
        });

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    });
}