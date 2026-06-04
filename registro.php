<?php

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$direccion = $_POST['direccion'];
$password = $_POST['pasword'];

echo "<h1>Registro Exitoso</h1>";

<?php
header("Location: dashboard.html");
exit();
?>

echo "<p><strong>Nombre:</strong> $nombre</p>";
echo "<p><strong>Correo:</strong> $correo</p>";
echo "<p><strong>Teléfono:</strong> $telefono</p>";
echo "<p><strong>Dirección:</strong> $direccion</p>";

echo "<br>";
echo "<a href='index.html'>Volver al Inicio</a>";

?>