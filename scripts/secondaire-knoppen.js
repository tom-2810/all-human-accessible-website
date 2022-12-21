let topButton = document.getElementById("top-button");
let shareButton = document.getElementById("share-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    document.body.scrollTop > 250 || document.documentElement.scrollTop > 250 ? topButton.style.display = "block" : topButton.style.display = "none";
};

shareButton.addEventListener("click", function () {
    navigator.share({
        title: document.title,
        url: window.location.href
    });
});