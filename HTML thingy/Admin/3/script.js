document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('examForm');

  // Load saved data from local storage
  const savedData = JSON.parse(localStorage.getItem('examData')) || {};

  // Function to display exam form data
  function displayFormData() {
    const examNameInput = document.getElementById('examName');
    const examDescriptionInput = document.getElementById('examDescription');
    const examTypeInput = document.getElementById('examType');

    // Populate form fields with saved data
    examNameInput.value = savedData.name || '';
    examDescriptionInput.value = savedData.description || '';
    examTypeInput.value = savedData.type || '';
  }

  // Function to save form data to local storage
  function saveFormData() {
    const examNameInput = document.getElementById('examName');
    const examDescriptionInput = document.getElementById('examDescription');
    const examTypeInput = document.getElementById('examType');

    // Save form data to local storage
    const formData = {
      name: examNameInput.value,
      description: examDescriptionInput.value,
      type: examTypeInput.value
    };
    localStorage.setItem('examData', JSON.stringify(formData));
  }

  // Display saved form data
  displayFormData();

  // Event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    saveFormData();
    alert('Form data saved successfully!');
  });
});
