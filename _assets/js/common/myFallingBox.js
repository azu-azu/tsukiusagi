const count = 7;
let parent = document.getElementById('js-sector');
let fragment = document.createDocumentFragment(); //fragment作成

for (i = 0; i < count; i++) {
  let sector = document.createElement('div');
  sector.className = "sector";
  fragment.appendChild(sector);

  let rotateBack = document.createElement('div');
  rotateBack.className = "rotate";
  sector.appendChild(rotateBack);

  let fallingLayer = document.createElement('div');
  fallingLayer.className = "falling";
  rotateBack.appendChild(fallingLayer);

  let lineHitbox = document.createElement('div');
  lineHitbox.className = "line-box";
  fallingLayer.appendChild(lineHitbox);

  let line = document.createElement('div');
  line.className = "line-box__line c-ball";
  lineHitbox.appendChild(line);
}

parent.appendChild(fragment);
