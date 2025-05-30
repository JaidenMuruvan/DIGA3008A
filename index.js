//Back-to-top
const scrollProgress = document.getElementById("progress");
const progressValue = document.getElementById("progress-value");

function calcScrollValue() {
    const pos = window.scrollY;
    const doc = document.documentElement;

    //Instead of using window.innerHeight I am using doc.clientHeight to try and make it consistent on other devices
    const winHeight = doc.clientHeight;
    const scrollHeight = doc.scrollHeight;

    const totalScrollable = scrollHeight - winHeight;

    let scrollPercent = totalScrollable > 0
        ? Math.round((pos / totalScrollable) * 100)
        : 0;

    //Clamps value just in case, prevents it from going over 100
    scrollPercent = Math.min(scrollPercent, 100);

    //Show/hide button
    scrollProgress.style.display = pos > 100 ? "grid" : "none";

    //Fill the circular progress, first color is the filling and second color is what is remaining
    scrollProgress.style.background = `conic-gradient(#48cfcb ${scrollPercent}%, #d7d7d7 ${scrollPercent}%)`;
}

//Scroll to top when clicked
scrollProgress.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//Attached event listeners
window.addEventListener("scroll", calcScrollValue);
window.addEventListener("load", calcScrollValue);

//Ran on scroll and load
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
