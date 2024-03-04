document.addEventListener('DOMContentLoaded', function() {
  const examList = document.getElementById('examList');
  const userList = document.getElementById('userList');
  const statistics = document.getElementById('statistics');

  // Simulated data for exam list, user list, and statistics
  const examData = [
    { name: 'Midterm Exam', status: 'Free Access' },
    { name: 'Final Exam', status: 'Time-bound' }
  ];

  const userData = [
    { username: 'user1', email: 'user1@example.com' },
    { username: 'user2', email: 'user2@example.com' }
  ];

  const statisticsData = {
    totalUsers: 100,
    totalExams: 10,
    completionRate: '85%',
    averageScore: 75
  };

  // Display exam list
  examList.innerHTML = `<h3>Exam List:</h3>`;
  examData.forEach(exam => {
    examList.innerHTML += `<p>${exam.name} - ${exam.status}</p>`;
  });

  // Display user list
  userList.innerHTML = `<h3>User List:</h3>`;
  userData.forEach(user => {
    userList.innerHTML += `<p>${user.username} - ${user.email}</p>`;
  });

  // Display statistics
  statistics.innerHTML = `
    <h3>Statistics:</h3>
    <p>Total Users: ${statisticsData.totalUsers}</p>
    <p>Total Exams: ${statisticsData.totalExams}</p>
    <p>Completion Rate: ${statisticsData.completionRate}</p>
    <p>Average Score: ${statisticsData.averageScore}</p>
  `;
});
