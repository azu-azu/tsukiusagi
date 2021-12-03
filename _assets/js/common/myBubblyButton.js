const animateButton = function (e) {
    const myClasslist = e.target.classList;
    e.preventDefault;
    myClasslist.remove('animate');
    myClasslist.add('animate');
};

const animateRemove = function (e) {
    const myClasslist = e.target.classList;
    e.preventDefault;
    myClasslist.remove('animate');
};


const bubblyButtons = document.getElementsByClassName("js-bubbly");
const myLength = bubblyButtons.length;

for (let i = 0; i < myLength; i++) {
    bubblyButtons[i].addEventListener('mouseover', animateButton, false);
    bubblyButtons[i].addEventListener('mouseout', animateRemove, false);
}



// const animateButton = function (e) {
//     const myClasslist = e.target.classList;

//     e.preventDefault;

//     myClasslist.remove('animate');
//     myClasslist.add('animate');

//     setTimeout(function () {
//         myClasslist.remove('animate');
//     }, 700);
// };




