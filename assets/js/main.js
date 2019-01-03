// datepicker
flatpickr("#date", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});
// scrolling effects
// make nav fixed
if (window.pageYOffset > 150) {
    document.querySelector('nav').classList.add('fixed');
}
document.addEventListener('scroll', function () {
    if (window.pageYOffset > 150) {
        document.querySelector('nav').classList.add('fixed');
    } else if (window.pageYOffset < 150) {
        document.querySelector('nav').classList.remove('fixed');
    }
});



document.getElementById('toggle').addEventListener('click', function () {
    var ul = document.querySelector('nav > ul');
    if (ul.style.display == "") {
        ul.style.display = "block";
    } else {
        ul.style.display = "";
    }
})