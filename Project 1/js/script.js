// Smooth hover underline on nav links
document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.borderBottom = "2px solid white";
    });

    link.addEventListener("mouseout", () => {
        link.style.borderBottom = "none";
    });
});

// Animate main headline on load
window.addEventListener("DOMContentLoaded", () => {
    const mainHeading = document.querySelector("main h1");
    mainHeading.style.opacity = 0;
    mainHeading.style.transform = "translateY(-30px)";
    setTimeout(() => {
        mainHeading.style.transition = "all 1s ease";
        mainHeading.style.opacity = 1;
        mainHeading.style.transform = "translateY(0)";
    }, 300);
});

// Animate search bar focus
const searchBar = document.querySelector(".search-bar");
searchBar.addEventListener("focus", () => {
    searchBar.style.outline = "2px solid #e53935";
});
searchBar.addEventListener("blur", () => {
    searchBar.style.outline = "none";
});
