const btnScrollToTop = document.querySelector("#BtnScrollUp");

btnScrollToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});