
var currentQuestion = 0;

function renderQuestion() { 
  var progress = ((currentQuestion + 1)*100/3)
  $(".StatusPosition").text(progress.toFixed(2) + '%');

  $(".StatusPosition").css('width', progress+"%")
  $(".StatusText").text("esti la intrebarea "+ (currentQuestion + 1) + "/" + questions.length);
  $(".Intrebare").text(questions[currentQuestion].question);
  var raspunsuri = $(".Raspunsuri");
  raspunsuri.html("");
  for (var i=0; i<questions[currentQuestion].answers.length; i++) {
    var element = $(
      	'<li class="Raspuns">' + 
			'<label class="RaspunsLabel">' +
				'<input class="Check" id="varianta1" name="variante" type="radio" value="' + i + '" />'+
				'<span class="RaspunsText">' + questions[currentQuestion].answers[i] + '</span>'+
			'</label>'+
		'</li>'
	)
	raspunsuri.append(element);
   }
}


renderQuestion();
$(".Button.SubmitAnswer").on("click", function (event) {
    var checkedAnswer = parseInt($('.Formular input:checked').val(), 10);
    localStorage.setItem(currentQuestion, checkedAnswer);
    currentQuestion++;
	renderQuestion();
	if (currentQuestion < questions.length){
    	event.preventDefault();
    	return false;
    } else {
    	return true;
    }
})

