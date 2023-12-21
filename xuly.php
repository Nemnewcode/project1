<!DOCTYPE html>
<html>
<head>
  <title>Đăng nhập và Đăng ký</title>
</head>
<body>
  <h2>Đăng nhập</h2>
  <form action="/login" method="post">
    <label for="username">Tên đăng nhập:</label>
    <input type="text" id="username" name="username" required><br><br>
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required><br><br>
    <input type="submit" value="Đăng nhập">
  </form>

  <h2>Đăng ký</h2>
  <form action="/register" method="post">
    <label for="username">Tên đăng nhập:</label>
    <input type="text" id="username" name="username" required><br><br>
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>
    <input type="submit" value="Đăng ký">
  </form>

  <?php
    // Xử lý đăng nhập
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["username"]) && isset($_POST["password"])) {
      $username = $_POST["username"];
      $password = $_POST["password"];
    }

    // Xử lý đăng ký
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["email"])) {
      $username = $_POST["username"];
      $password = $_POST["password"];
      $email = $_POST["email"];
    }
  ?>
</body>
</html>