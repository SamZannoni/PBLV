<!DOCTYPE html>

<?php
include 'ressource/Parsedown.php';
include 'ressource/ParsedownExtra.php';

// Si jamais le fichier Markdown change, il faut changer le nom ici :
$texte = file_get_contents('sequence-1-2.md');

$extra = new ParsedownExtra();

?>

<html lang="fr">

<head>
  <meta charset="UTF-8">
  <title>La Vie Plus Belle Script</title>
  <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/print.css">
  <script src="js/script.js"></script>

</head>

<body>
  <div id="container_txt">

    <?php
    echo $extra->text($texte);
    ?>
  </div>

</body>
</html>
