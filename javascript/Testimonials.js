var slideIndexTs = 1;
showSlidesTs(slideIndexTs);

function plusSlidesTs(n) {
  showSlidesTs(slideIndexTs += n);
}

function currentSlideTs(n) {
  showSlidesTs(slideIndexTs = n);
}

function showSlidesTs(n) {
  var i;
  var slid = document.getElementsByClassName("ts-slide");
  var dots = document.getElementsByClassName("ts-dot");
  if (n > slid.length) {slideIndexTs = 1}    
  if (n < 1) {slideIndexTs = slid.length}
  for (i = 0; i < slid.length; i++) {
      slid[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slid[slideIndexTs-1].style.display = "block";  
  dots[slideIndexTs-1].className += " active";
}