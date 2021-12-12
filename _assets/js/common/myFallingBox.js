const count = 7;
const fragment = document.createDocumentFragment(); //fragment作成

// falling-box
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
const parent = document.getElementById('js-sector');
parent.appendChild(fragment);



// playing-box
for (i = 0; i < count; i++) {
  let sector = document.createElement('div');
  sector.className = "sector2";
  fragment.appendChild(sector);

  let rotateBack = document.createElement('div');
  rotateBack.className = "rotate2";
  sector.appendChild(rotateBack);

  let fallingLayer = document.createElement('div');
  fallingLayer.className = "falling2";
  rotateBack.appendChild(fallingLayer);

  let lineHitbox = document.createElement('div');
  lineHitbox.className = "line-box2";
  fallingLayer.appendChild(lineHitbox);

  let line = document.createElement('div');
  line.className = "line-box__line2 c-ball";
  lineHitbox.appendChild(line);
}
const parent2 = document.getElementById('js-sector-play');
parent2.appendChild(fragment);
