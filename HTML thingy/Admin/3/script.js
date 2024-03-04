document.addEventListener('DOMContentLoaded', function() {
  const examForm = document.getElementById('examForm');

  examForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const examName = examForm.examName.value;
    const examDescription = examForm.examDescription.value;
    const examType = examForm.examType.value;
    const examQuestions = examForm.examQuestions.value;

    // Process the exam data (for demonstration, just log it)
    console.log('Exam Name:', examName);
    console.log('Exam Description:', examDescription);
    console.log('Exam Type:', examType);
    console.log('Exam Questions:', examQuestions);

    // Clear form fields after submission
    examForm.reset();
  });
});
