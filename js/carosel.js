var index = 1;
displaySlide(index);

function current(n){
    displaySlide(index = n)
}

function next() {
    displaySlide(index += 1);
}


function prev() {
    displaySlide(index -= 1);
}


function displaySlide(n){

    var slide = document.getElementsByClassName("slides");
    var line = document.getElementsByClassName("line")

    if( n > slide.length)
        index = 1;
    if(n < 1) index = slide.length;

    for (var i = 0; i < line.length; i++) {
        line[i].className = line[i].className.replace(" curr", "");
    }

    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";  
    }
    
    slide[index-1].style.display = "block";  
    line[index-1].className += " curr";
}