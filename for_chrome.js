function moveSlider() {
   let value = (document.getElementById("slider").value)/(100)*100;
   document.getElementById("slider").style.background = 'linear-gradient(to right, #72040d 0%, #72040d ' + value + '%, #000 ' + value + '%, #000 100%)';
}
