let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let leftSpace = imgBox.offsetLeft;
let originalimg = document.getElementById("original-img");

let line = document.getElementById("line");


originalimg.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function(e){
    e.pageX;
    let boxWidth =  (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
    
}