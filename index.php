<!DOCTYPE html>

<!-- Balise PHP -->
<?php
include 'ressource/Parsedown.php';
include 'ressource/ParsedownExtra.php';
// Le script php qui permet de "parser" le markdown (de le traduire en HTML)

// Si jamais le fichier Markdown change, il faut changer le nom ici d'abord:
$texte1 = file_get_contents('episode-1.md');
$texte2 = file_get_contents('episode-2.md');
$texte3 = file_get_contents('episode-3.md');
$texte4 = file_get_contents('episode-4.md');
$texte5 = file_get_contents('episode-5.md');
$extra = new ParsedownExtra();

?>
<!-- Fin de balise PHP -->

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
<!-- Puis, il faut rajouter ici aussi -->
<!-- Balise PHP -->
    <?php
    echo $extra->text($texte1);
    echo $extra->text($texte2);
    echo $extra->text($texte3);
    echo $extra->text($texte4);
    echo $extra->text($texte5);

    ?>
    <!-- Fin de balise PHP -->
  </div>

</body>
</html>
