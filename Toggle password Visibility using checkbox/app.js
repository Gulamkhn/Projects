document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const toggleCheckbox = document.getElementById('togglePassword');
  
    toggleCheckbox.addEventListener('change', function() {
      passwordInput.type = toggleCheckbox.checked ? 'text' : 'password';
    });
  });
  