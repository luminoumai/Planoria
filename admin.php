<?php
// juste pour tester si PHP fonctionne
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Admin Login / Signup - Planoria</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <div class="admin-container">

        <div class="form-box">

            <div class="button-box">
                <div id="btn"></div>
                <button type="button" class="toggle-btn" onclick="login()">Login</button>
                <button type="button" class="toggle-btn" onclick="signup()">Signup</button>
            </div>

            <!-- FORM LOGIN -->
            <form id="login" class="input-group" action="loginProcess.php" method="POST">
                <input type="text" name="username" placeholder="Nom d'utilisateur" required>
                <input type="password" name="password" placeholder="Mot de passe" required>
                <button type="submit" class="submit-btn">Login</button>
            </form>

            <!-- FORM SIGNUP -->
            <form id="signup" class="input-group" action="signupProcess.php" method="POST">
                <input type="text" name="username" placeholder="Nom d'utilisateur" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Mot de passe" required>
                <button type="submit" class="submit-btn">Signup</button>
            </form>

        </div>

    </div>

    <script src="admin.js"></script>
</body>
</html>