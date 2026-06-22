<?php
// 允许跨域请求（如果前端和后端域名不同）
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// 处理浏览器的 OPTIONS 预检请求
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "仅支持 POST 请求"]);
    exit;
}

// 接收前端发送的 JSON 数据
$input = json_decode(file_get_contents('php://input'), true);
$email = isset($input['email']) ? trim($input['email']) : '';

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "邮箱格式不正确"]);
    exit;
}

// =================【配置你的宝塔数据库信息】=================
$db_host = 'localhost';          // 数据库地址（宝塔本地数据库一般为 localhost 或 127.0.0.1）
$db_name = '你的数据库名';        // 替换为在宝塔中创建的数据库名
$db_user = '你的数据库用户名';    // 替换为数据库用户名
$db_pass = '你的数据库密码';      // 替换为数据库密码
// ============================================================

try {
    // 使用 PDO 预处理防止 SQL 注入
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

    // 检查邮箱是否已被登记过
    $stmt = $pdo->prepare("SELECT id FROM subscribers WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        echo json_encode(["status" => "success", "message" => "您已订阅过该动态！"]);
        exit;
    }

    // 插入数据库
    $stmt = $pdo->prepare("INSERT INTO subscribers (email) VALUES (?)");
    $stmt->execute([$email]);

    echo json_encode(["status" => "success", "message" => "订阅成功！感谢您的关注。"]);
} catch (PDOException $e) {
    // 生产环境中，不建议直接抛出具体的 PDO 错误（避免泄露表结构/配置信息）
    // 如果需要调试，可以临时开启，或在服务器配置日志输出
    echo json_encode(["status" => "error", "message" => "服务器数据库配置错误，请稍后再试"]);
}
?>
