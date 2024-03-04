document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Kiểm tra thông tin đăng nhập ở đây
    console.log('Đăng nhập với: ', username, password);
  });

  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = registerForm.newUsername.value;
    const email = registerForm.email.value;
    const newPassword = registerForm.newPassword.value;
    const confirmPassword = registerForm.confirmPassword.value;

    // Kiểm tra thông tin đăng ký ở đây
    console.log('Đăng ký với: ', newUsername, email, newPassword, confirmPassword);
  });
});
