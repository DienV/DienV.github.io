document.addEventListener('DOMContentLoaded', function() {
  const examList = document.getElementById('examList');
  const userList = document.getElementById('userList');
  const statistics = document.getElementById('statistics');

  // Simulated data for exam list, user list, and statistics
  const examData = [
    { name: 'Midterm Exam', status: 'Free Access', link: '#' },
    { name: 'Final Exam', status: 'Time-bound', link: '#' }
  ];

  const userData = [
    { username: 'user1', email: 'user1@example.com', link: '#' },
    { username: 'user2', email: 'user2@example.com', link: '#' }
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
    examList.innerHTML += `<p><a href="${exam.link}">${exam.name} - ${exam.status}</a></p>`;
  });

  // Display user list
  userList.innerHTML = `<h3>User List:</h3>`;
  userData.forEach(user => {
    userList.innerHTML += `<p><a href="${user.link}">${user.username} - ${user.email}</a></p>`;
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
