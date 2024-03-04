document.addEventListener('DOMContentLoaded', function() {
  const adminLoginForm = document.getElementById('adminLoginForm');

  adminLoginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const adminUsername = adminLoginForm.adminUsername.value;
    const adminPassword = adminLoginForm.adminPassword.value;

    // Check admin credentials here (for demonstration, assume login successful)
    console.log('Admin login with: ', adminUsername, adminPassword);

    // Redirect or show dashboard after successful login
    // For demonstration, let's just display a message
    alert('Đăng nhập Admin thành công!');
  });
});
