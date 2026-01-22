// Array of correct answers for q1 to q9
const correctAnswers = ['b', 'b', 'b', 'a', 'a', 'a', 'c', 'a', 'b'];

function checkScore() {
  let score = 0;
  let resultDetails = ""; // store feedback for each question

  for (let i = 1; i <= correctAnswers.length; i++) {
    const question = document.querySelector(`input[name="q${i}"]:checked`);

    if (question) {
      if (question.value === correctAnswers[i - 1]) {
        score++;
        resultDetails += `Question ${i}: Correct ✅\n`;
      } else {
        resultDetails += `Question ${i}: Incorrect ❌ (Correct: ${correctAnswers[i - 1].toUpperCase()})\n`;
      }
    } else {
      resultDetails += `Question ${i}: Not Answered ⚠️ (Correct: ${correctAnswers[i - 1].toUpperCase()})\n`;
    }
  }

  // Show final score and detailed feedback
  alert(`You scored ${score} out of ${correctAnswers.length}!\n\nDetails:\n${resultDetails}`);
}
