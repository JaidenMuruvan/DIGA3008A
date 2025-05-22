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

// Apply the theme on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

// Toggle theme on click
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    // Save the preference
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

const iconMobile = document.getElementById("icon-mobile");

iconMobile.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};
//DOM Object
// window.alert("Hello there, welcome!");
