document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');
  const studentResults = document.getElementById('studentResults');

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const studentSearch = searchForm.studentSearch.value;

    // Perform search for student results (for demonstration, use mock data)
    const studentData = {
      name: 'John Doe',
      exams: [
        { name: 'Midterm Exam', score: 85, status: 'Completed', timestamp: '2024-03-05 10:30:00' },
        { name: 'Final Exam', score: 90, status: 'Completed', timestamp: '2024-04-15 13:45:00' }
      ]
    };

    // Display student results
    let resultHTML = `<h3>Kết quả của Sinh viên: ${studentData.name}</h3>`;
    resultHTML += '<ul>';
    studentData.exams.forEach(exam => {
      resultHTML += `
        <li>
          <strong>${exam.name}</strong>: Điểm ${exam.score} - ${exam.status}, Thời gian: ${exam.timestamp}
        </li>
      `;
    });
    resultHTML += '</ul>';

    studentResults.innerHTML = resultHTML;
  });
});
