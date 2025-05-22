//Back-to-top
let scrollProgress = document.getElementById("progress");
let progressValue = document.getElementById("progress-value");

let calcScrollValue = () => {
    let pos = window.scrollY; // more consistent across devices
    let winHeight = window.innerHeight;
    let docHeight = document.documentElement.scrollHeight;

    // Total scrollable height
    let scrollable = docHeight - winHeight;

    // Avoid divide-by-zero errors
    let scrollValue = scrollable > 0 ? Math.round((pos / scrollable) * 100) : 0;

    // Show or hide scroll-to-top button
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    // Fill the circle
    scrollProgress.style.background = `conic-gradient(#48cfcb ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

// Smooth scroll to top on click
scrollProgress.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Run on scroll and load
window.addEventListener("scroll", calcScrollValue);
window.addEventListener("load", calcScrollValue);

//Dark Mode
const icon = document.getElementById("icon-desktop");
const iconMobile = document.getElementById("icon-mobile");

//Check if current page is the home page (root)
const isHomePage =
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/index.html") ||
    window.location.pathname.split("/").filter(Boolean).length === 1;

const imageBasePath = isHomePage ? "Images/" : "../Images/";

const moonIconPath = imageBasePath + "moon.png";
const sunIconPath = imageBasePath + "sun.png";

//Apply the theme and icon on page when it loads
const theme = localStorage.getItem("theme");

if (theme === "dark") {
    document.body.classList.add("dark-theme");
    if (icon) icon.src = sunIconPath;
    if (iconMobile) iconMobile.src = sunIconPath;
} else {
    document.body.classList.remove("dark-theme");
    if (icon) icon.src = moonIconPath;
    if (iconMobile) iconMobile.src = moonIconPath;
}

//Toggle the theme function
function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-theme");
    const newIconSrc = isDark ? sunIconPath : moonIconPath;

    if (icon) icon.src = newIconSrc;
    if (iconMobile) iconMobile.src = newIconSrc;

    localStorage.setItem("theme", isDark ? "dark" : "light");
}

//Add event listeners
if (icon) icon.onclick = toggleTheme;
if (iconMobile) iconMobile.onclick = toggleTheme;

//DOM Object
// window.alert("Hello there, welcome!");
