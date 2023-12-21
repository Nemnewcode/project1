

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn gửi yêu cầu mặc định
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === '' && password === '') {
      alert('Đăng nhập thành công!');
      window.location.href = 'index.html';
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại!');
    }
  });
