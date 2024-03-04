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

  // Function to display exam list
  function displayExamList() {
    examList.innerHTML = `<h3>Exam List:</h3>`;
    examData.forEach(exam => {
      examList.innerHTML += `<p>${exam.name} - ${exam.status}</p>`;
    });
  }

  // Function to display user list
  function displayUserList() {
    userList.innerHTML = `<h3>User List:</h3>`;
    userData.forEach(user => {
      userList.innerHTML += `<p>${user.username} - ${user.email}</p>`;
    });
  }

  // Function to display statistics
  function displayStatistics() {
    statistics.innerHTML = `
      <h3>Statistics:</h3>
      <p>Total Users: ${statisticsData.totalUsers}</p>
      <p>Total Exams: ${statisticsData.totalExams}</p>
      <p>Completion Rate: ${statisticsData.completionRate}</p>
      <p>Average Score: ${statisticsData.averageScore}</p>
    `;
  }

  // Display exam list by default
  displayExamList();

  // Event listeners for options
  examList.addEventListener('click', function() {
    displayExamList();
  });

  userList.addEventListener('click', function() {
    displayUserList();
  });

  statistics.addEventListener('click', function() {
    displayStatistics();
  });
});

  statistics.addEventListener('click', function() {
    displayStatistics();
  });
});
