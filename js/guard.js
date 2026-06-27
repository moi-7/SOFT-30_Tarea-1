// Guard clause: Bloquea accesso al dashboard si NO está en sessionStorage Y TAMPOCO está en localStorage
export function checkAuth() {
    const isLoggedIn =
        sessionStorage.getItem("isLoggedIn") === "true" ||
        localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
        window.location.replace("index.html");
    }
}