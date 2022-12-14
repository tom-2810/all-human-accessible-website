let modeSwitch = document.getElementById("mode").getElementsByTagName("input")[0];

modeSwitch.addEventListener('click', function () {
    modeSwitch.checked ? 
    document.documentElement.setAttribute("data-theme", "dark") : 
    document.documentElement.setAttribute("data-theme", "");
});