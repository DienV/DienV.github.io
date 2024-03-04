function openTab(tabId) {
  const tabs = document.querySelectorAll('.admin-tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
}

// Load default tab content when page loads
document.addEventListener('DOMContentLoaded', function() {
  openTab('examsTab');
});
