//need to make an array that changes the src's of the img tag every three seconds
//make a funcrtion that changes that inmg src
// have a timer that calls that function

var i = 0
var image = []
var timer = 4000;

image[0] = "img/IMG_1903.jpeg"
image[1] = "img/IMG_0053.jpeg"
image[2] = "img/IMG_0057.jpeg"
image[3] = "img/IMG_2522.jpeg"
image[4] = "img/IMG_2592.jpeg"
image[5] = "img/IMG_4820.jpeg"

function changeSlides(){
    document.slide.src = image[i]

    if(i < image.length - 1){
        i++
    }else{
        i = 0
    }
    setTimeout("changeSlides()", timer)
}

window.onload = changeSlides;