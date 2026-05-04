
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {
        navbar.style.background = "rgba(10, 10, 15, 0.85)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
    } else {
        navbar.style.background = "rgba(15, 15, 20, 0.45)";
        navbar.style.boxShadow = "none";
    }
});