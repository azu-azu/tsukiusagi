const PLANET_NUM = 8;
const colors = ['#fff', '#ff0', '#f0f'];

function randomRange(low, high) {
  return low + Math.floor(Math.random() * (high - low + 1));
}

const tracks = document.querySelectorAll('.p-orbit');

for (let i = 0; i < PLANET_NUM; i++) {
  const track = tracks[randomRange(0, tracks.length - 1)];
  const planet = document.createElement('span');
  planet.className = 'planet';
  planet.style.setProperty('--planet-size', `${randomRange(35, 60)}px`);
  planet.style.setProperty('--planet-color', colors[randomRange(0, colors.length - 1)]);
  planet.style.setProperty('--planet-anim-delay', `-${20 / 10 * i}s`);
  planet.style.setProperty('--planet-anim-duration', `${4 * i}s`);
  planet.style.opacity = 0.2;
  track.appendChild(planet);
}