window.addEventListener('load', setup);

function setup() {
  // 1.Supprimer les timecodes :
  // On récupère dans le document tout les "p", et on regarde si ils ont une lettre en début de paragraphe ->
  // Si non, alors ça veut dire que c'est un timecode, donc on le supprime.
  var p = document.getElementsByTagName("p");
  for (let i = 0; i < p.length; i++) {
    if (p[i].innerHTML.match(/^\d/)) {
      p[i].remove()
    }
  }

  // 2. Ici, on va chercher dans notre document les balises qu'on à créer précedemment avec le markdown (H1, H2 etc.) 
  // On nomme notre variable avec le nom qui correspond à cette balise pour mieux s'y retrouver.

  let num_episode = document.getElementsByTagName("h2"); // La balise h2, c'est le numéro de l'épisode 
  let titre_episode = document.getElementsByTagName("h3"); // La, le titre de l'épisode
  let num_sequence = document.getElementsByTagName("h4"); //  etc.
  let lieu = document.getElementsByTagName("h5");
  let personnages = document.getElementsByTagName("h6");
  let contexte = document.getElementsByTagName(">");


  // 3. La, c'est une petite manip qui dis : 
  //      
  for (let i = 0; i < num_episode.length; i++) {
    num_episode[i].appendChild(titre_episode[i]); // Dans chaques boites "num_episode", je vais aussi mettre "titre_episode" 
    num_episode[i].appendChild(num_sequence[i]);  // et "num_sequence"

    //  -------------------
    //  | Episode 1       |
    //  |  -------------- |    
    //  | | num_episode | |
    //  |  -------------- | 
    //  |  -------------- |    
    //  | | titre_episo | |
    //  |  -------------- | 
    //  -------------------

    // Si tu regardes dans le html avec la console en faisant inspecter, tu vois que les h3 et h4 sont à l'intérieur de h2. 
    // J'ai fais ça pour notamment les mettres sur la même lignes, et pouvoir les styler en css...
    //
    num_episode[i].classList = "infos num_episode";
    // Mettre à tout les num_episodes (h2) une classe "infos" et une classe "num_episode". 
    // Sinon, ils s'appeleraient juste h2. Maintenant ils ont plusieurs prénoms... :)

    // 4. Ici, je dis que si notre boite h2 qui s'appelle maintenant "num_épisode" n'est pas le numéro 0, alors je fais un saut de page
    // C'est pour qu'à chaque nouvel épisode il y ai un saut de page.
    if (num_episode[i] != num_episode[0]) {
      num_episode[i].style.breakBefore = "always";
    }

  }

  // 5. Et là je répète l'opération du dessus, seulement je ne fais pas de manip ou je bouge les élements qq part, juste je leur donne une classe
  // pour pouvoir les styler en CSS et qu'on s'y retrouve sans chercher à chaque fois c quoi h2 c quoi h1 ...
  for (let i = 0; i < titre_episode.length; i++) {
    titre_episode[i].classList = "infos titre_episode";
  }
  for (let i = 0; i < num_sequence.length; i++) {
    num_sequence[i].classList = "infos num_sequence";
  }

  for (let i = 0; i < lieu.length; i++) {
    lieu[i].classList = "infos lieu";
    lieu[i].insertAdjacentHTML("afterbegin", "<span class='small'>Lieu</span> ") // Petit changement ici ou je rajoute dans la boite "lieu" du texte, en l'occurence Lieu)
  }
  for (let i = 0; i < personnages.length; i++) {
    personnages[i].insertAdjacentHTML("afterbegin", "<span class='small'>Personnages</span> ")
    personnages[i].classList = "infos personnages";
  }
  for (let i = 0; i < contexte.length; i++) {
    contexte[i].insertAdjacentHTML("afterbegin", "<span class='small'>Contexte</span> ")
    contexte[i].classList = "infos contexte";
  }
}

// ( EN COURS DE DEV) Créer une boite qui contient tout l'épisode et ses séquences
// var createInfoField = document.createElement('div');
// createInfoField.classList = "boite";
// num_episode[i].appendChild(createInfoField);
// function get_all_element() {
// }
