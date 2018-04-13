function submitAnswers () {
    var total = 5;
    var score = 0;

    //Get user input
    var q1 = document.forms["quizform"]["q1"].value;
    var q2 = document.forms["quizform"]["q2"].value;
    var q3 = document.forms["quizform"]["q3"].value;
    var q4 = document.forms["quizform"]["q4"].value;
    var q5 = document.forms["quizform"]["q5"].value;

    //Validation
    
  for(i = 1; i<=total; i++) {
    if(eval('q'+i) == null || eval('q' +i) == '') {
        alert("You missed question" + i);
        return false;
    }
  }

  // Set correct answers

  var answers = ["b","a","d","b","d"];

  //check answers
  for(i = 1; i<=total; i++) {
  if(eval('q'+i) == answers[i - 1]) {
    score++;
  }
}

// Display results
var results = document.getElementById('results');
results.innerHTML= '<h3>You scored <span> '+score+'</span> out of <span>'+total+'</span></h3> '
  alert('You scored '+score+' out of '+total);

  return false;
}