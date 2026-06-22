<?php
header("Content-Type: text/html; charset=utf-8");

// =================【配置你的宝塔数据库信息】=================
$db_host = 'localhost';          // 数据库地址（宝塔本地数据库一般为 localhost 或 127.0.0.1）
$db_name = '你的数据库名';        // 替换为在宝塔中创建的数据库名
$db_user = '你的数据库用户名';    // 替换为数据库用户名
$db_pass = '你的数据库密码';      // 替换为数据库密码
// ============================================================

try {
    // 1. 连接 MySQL 服务器（先不指定数据库名，防止数据库不存在报错）
    $pdo = new PDO("mysql:host=$db_host;charset=utf8mb4", $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    // 2. 如果数据库不存在，则创建数据库
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$db_name` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;");
    $pdo->exec("USE `$db_name`;");

    // 3. 创建 subscribers 表
    $sql = "CREATE TABLE IF NOT EXISTS `subscribers` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `email` VARCHAR(255) NOT NULL UNIQUE,
        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";
    
    $pdo->exec($sql);

    echo "<h2 style='color: green;'>数据库初始化成功！</h2>";
    echo "<p>表 <b>subscribers</b> 已成功创建。</p>";
    echo "<p style='color: red; font-weight: bold;'>【安全警告】请在运行成功后，立即在宝塔中删除此文件 (init_db.php)，防止他人恶意运行！</p>";

} catch (PDOException $e) {
    echo "<h2 style='color: red;'>初始化失败！</h2>";
    echo "<p>错误信息: " . htmlspecialchars($e->getMessage()) . "</p>";
    echo "<p>请检查您的数据库配置（用户名、密码）是否正确。</p>";
}
?>
