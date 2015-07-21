for ( var i =0; i < questions.length; i++) {
	var userAnswer = localStorage.getItem(i);
	var answerText = questions[i].answers[userAnswer];
	var answerCorrect = userAnswer === questions[i].correct;
	if (answerCorrect) {
		var answer = $(
			'<li class="Rezultat">'+
				'<img class="StatusRezultat" src="img/ok.png" width="32" height="32" alt="OK" />'+
				'<span class="RezultatText">' + answerText + '</span>'+
			'</li>'
		)		

	}
	else {
		var answer = $(
			'<li class="Rezultat">'+
				'<img class="StatusRezultat" src="img/err.png" width="32" height="32" alt="OK" />'+
				'<span class="RezultatText">' + answerText + '</span>'+
			'</li>'
		)	
	}
	$(".Rezultate").append(answer);
}

