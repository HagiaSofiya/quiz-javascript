var scrambler = {

	MIN_CHARCODE: 33,
	MAX_CHARCODE: 126,

    scrambleBtn: document.querySelector('#scramble'),
    unscrambleBtn: document.querySelector('#unscramble'),
    textInputEl: document.querySelector('#textInput'),
    textDisplayEl: document.querySelector('#textDisplay'),

	scramble: function(str) {
        var result = '';
		for (var i = 0; i < str.length; i ++ ) {
			result += '<span hidden="">' + str.charAt(i) + '</span>'
			var randomNumber = Math.floor(Math.random() * 10 + 10)
			for (var n = 0; n <= randomNumber; n++) {
				result += '<span>' + this.randomChar() + '</span>';
			}
		}
        return result;
	},

	unscramble: function(str) {
		var result = str.match(/<span hidden="">(.*?)<\/span>/g).map(function(x) {
			return x.replace(/<[^>]*>/g, '');
		}).join('');
        return result;
	},

	randomChar: function() {
		var charCode = Math.floor(Math.random() * (this.MAX_CHARCODE - this.MIN_CHARCODE) + this.MIN_CHARCODE);
		return String.fromCharCode(charCode);
	}

};

scrambler.scrambleBtn.addEventListener('click', function(e) {
    var scrambledText = scrambler.scramble(scrambler.textInputEl.value);
    scrambler.textDisplayEl.innerHTML = scrambler.textInputEl.value = scrambledText;
});

scrambler.unscrambleBtn.addEventListener('click', function(e) {
    var unscrambledText = scrambler.unscramble(scrambler.textInputEl.value);
    scrambler.textDisplayEl.innerHTML = scrambler.textInputEl.value = unscrambledText;
});