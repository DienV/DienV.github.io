document.addEventListener('DOMContentLoaded', function() {
  const statisticsDiv = document.getElementById('statistics');

  // Simulated statistics data
  const statisticsData = {
    totalParticipants: 100,
    completionRate: '85%',
    averageScore: 75,
    scoreDistribution: {
      excellent: 20,
      good: 40,
      fair: 25,
      poor: 15
    }
  };

  // Display statistics
  statisticsDiv.innerHTML = `
    <h3>Tổng số thí sinh: ${statisticsData.totalParticipants}</h3>
    <p>Tỷ lệ hoàn thành: ${statisticsData.completionRate}</p>
    <p>Điểm trung bình: ${statisticsData.averageScore}</p>
    <h4>Phân phối điểm số:</h4>
    <ul>
      <li>Excellent: ${statisticsData.scoreDistribution.excellent}</li>
      <li>Good: ${statisticsData.scoreDistribution.good}</li>
      <li>Fair: ${statisticsData.scoreDistribution.fair}</li>
      <li>Poor: ${statisticsData.scoreDistribution.poor}</li>
    </ul>
  `;
});
