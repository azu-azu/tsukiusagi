let animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
    e.target.classList.remove('animate');
    },700);
};


const bubblyButtons = document.getElementsByClassName("js-bubbly");
for (let i = 0; i < bubblyButtons.length; i++) {
// bubblyButtons[i].addEventListener('hover', animateButton, false);
bubblyButtons[i].addEventListener('mouseover', animateButton, false);
}
