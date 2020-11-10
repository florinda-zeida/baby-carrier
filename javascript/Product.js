/*---image-product-change---*/
const listOfImageDivs = document.querySelectorAll('.slide-img');
listOfImageDivs.forEach(function(image) {
    image.addEventListener("click", function() {
        document.querySelector('.main-image').src = event.target.dataset.image;
    })
})