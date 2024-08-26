
// var originalBG = $(".nav a").css("background-color");

// $('.nav li:not(".active") a').mousemove(function(e) {
//     x = e.pageX - this.offsetLeft;
//     y = e.pageY - this.offsetTop;
//     xy = x + " " + y;
//     bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), " + originalBG;
//     bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBG + " " + gradientSize + "px)";

//     $(this)
//         .css({background: bgWebKit})
//         .css({background: bgMoz});
//     }).mouseleave(function() {
//     $(this).css({
//         background: originalBG
//     });
// });
const cursor = document.querySelector('.custom-cursor'); 
 
document.addEventListener('mousemove', (e) => { 
    cursor.style.left = e.clientX + 'px'; 
    cursor.style.top = e.clientY + 'px'; 
}); 
 
// Add a hover effect to interactive elements 
const interactiveElements = document.querySelectorAll('.interactive'); 
interactiveElements.forEach((element) => { 
    element.addEventListener('mouseenter', () => { 
        cursor.style.width = '40px'; 
        cursor.style.height = '40px'; 
    }); 
    element.addEventListener('mouseleave', () => { 
        cursor.style.width = '20px'; 
        cursor.style.height = '20px'; 
    }); 
}); 