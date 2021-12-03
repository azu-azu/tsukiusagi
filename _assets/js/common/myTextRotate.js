//Text Animation
const paragraph = document.getElementById('js-rotate');

function textEffect(animationName) {
	let text = paragraph.innerHTML,
		chars = text.length,
		newText = '',
		animation = animationName,
		char,
		i;

	for (i = 0; i < chars; i += 1) {
		newText += '<i>' + text.charAt(i) + '</i>';
	}

	paragraph.innerHTML = newText;

	let wrappedChars = document.getElementsByTagName('i'),
		wrappedCharsLen = wrappedChars.length,
		j = 0;

	function addEffect() {
		setTimeout(function () {
			wrappedChars[j].className = animation;
			j += 1;
			if (j < wrappedCharsLen) {
				addEffect();
			}
		}, 100)
	}

	addEffect();
};

textEffect('fly-in-out');


