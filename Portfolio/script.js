document.addEventListener('scroll', () => {
    const header = document.querySelector('#header');

    if (window.scrollY > document.querySelector('#back-img').offsetHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

var modal = document.getElementById("myModal");

var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

var imgs = document.querySelectorAll(".portfolio-img");

imgs.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}