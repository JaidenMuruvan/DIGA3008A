//Back-to-top
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");

    // Get current scroll position
    let pos = document.documentElement.scrollTop || document.body.scrollTop;

    // Total scrollable height
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    let clientHeight = document.documentElement.clientHeight || window.innerHeight;

    // Calculate percentage scrolled, with safeguard against division by zero
    let calcHeight = scrollHeight - clientHeight;
    let scrollValue = calcHeight > 0 ? Math.round((pos * 100) / calcHeight) : 0;

    // Show or hide the progress button
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    // Scroll to top when clicked
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });

    // Set conic gradient background fill
    scrollProgress.style.background = `conic-gradient(#48cfcb ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

// Run the function on scroll and page load
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

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
