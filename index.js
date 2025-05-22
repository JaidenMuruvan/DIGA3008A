let calcScrollValue = () => {
    //Getting element ny its ID
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if(pos>100){
        scrollProgress.style.display = "grid";
    } else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = `conic-gradient(#48cfcb ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

const icon = document.getElementById("icon-desktop");
const iconMobile = document.getElementById("icon-mobile");

// Absolute paths from the root
const moonIconPath = "/Images/moon.png";
const sunIconPath = "/Images/sun.png";

// Apply theme and icon on page load
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

// Function to toggle theme and icons
function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-theme");

    const newIconSrc = isDark ? sunIconPath : moonIconPath;

    if (icon) icon.src = newIconSrc;
    if (iconMobile) iconMobile.src = newIconSrc;

    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Add click events
if (icon) icon.onclick = toggleTheme;
if (iconMobile) iconMobile.onclick = toggleTheme;
//DOM Object
// window.alert("Hello there, welcome!");
