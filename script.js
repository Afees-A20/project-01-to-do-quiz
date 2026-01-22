const correctAnswers = {
  q1: "b",
  q2: "a",
  q3: "c",
  q4: "a",
  q5: "c",
  q6: "b",
  q7: "a",
  q8: "b",
  q9: "c"
};

function checkScore() {
  let score = 0;

  for (let question in correctAnswers) {
    const selected = document.querySelector(
      `input[name="${question}"]:checked`
    );

    if (selected && selected.value === correctAnswers[question]) {
      score++;
    }
  }

  alert("Your score is " + score + " out of 9");
}
