let modeSwitch = document.getElementById("mode");

document.getElementById("mode").addEventListener('click', function () {
    modeSwitch.checked ? 
    document.documentElement.setAttribute("data-theme", "dark") : 
    document.documentElement.setAttribute("data-theme", "");
});