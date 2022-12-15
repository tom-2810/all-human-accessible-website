document.querySelector("#hamburger-icon").addEventListener("click", function() {
    document.querySelector("#navigation #top-nav").classList.toggle("open");
    document.body.classList.toggle("stop-scroll");
});