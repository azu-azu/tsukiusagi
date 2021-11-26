let parent = document.getElementById('js-star-way');
let fragment = document.createDocumentFragment(); //fragment作成

for (i = 0; i < 100; i++) {
  let children = document.createElement('div');
  children.className = "star"
  fragment.appendChild(children);
}

parent.appendChild(fragment);


// window.onload = function () {
//   let count = 100,
//     div,
//     divStar = document.getElementById('js-star'),
//     fragment = document.createDocumentFragment();

//   // rows
//   for (let i = 0; i < count; ++i) {

//     // columns
//     for (let j = 0; j < count; ++j) {
//       div = document.createElement('div');
//       div.className = 'star';
//       fragment.appendChild(div);
//     }
//   }

//   divStar.appendChild(fragment);
// };