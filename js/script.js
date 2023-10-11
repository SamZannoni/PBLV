window.addEventListener('load', setup);

function setup(){

  var p = document.getElementsByTagName("p");
  // Supprimer les timecodes ( recherche dans tout les paragraphes si un paragraphe commence avec un nombre )
  for (let i = 0; i < p.length; i++) {
    if(  p[i].innerHTML.match(/^\d/)){
      p[i].remove()
    }
  }

  var container_txt = document.getElementById("container_txt");
  // Récuperer les 5 premiers éléments du Markdown
  let episode = document.getElementsByTagName("h2");
  let titre_episode = document.getElementsByTagName("h3");
  let sequence = document.getElementsByTagName("h4");

  let lieu = document.getElementsByTagName("h5");
  let personnages = document.getElementsByTagName("h6");

  for (let i = 0; i < episode.length; i++) {
    episode[i].appendChild(titre_episode[i]);
    episode[i].appendChild(sequence[i]);
    episode[i].classList="infos episode";
    if(episode[i]!=episode[0]){
      episode[i].style.breakBefore = "always";
    }
    // Créer une boite qui contient tout jusqu'au prochaines données (##)

    var createInfoField = document.createElement('div');
    createInfoField.classList = "boite";
    episode[i].appendChild(createInfoField);

  }

  for (let i = 0; i < titre_episode.length; i++) {
    titre_episode[i].classList="infos titre_episode";
  }

  for (let i = 0; i < sequence.length; i++) {
    sequence[i].classList="infos sequence";
  }


  for (let i = 0; i < lieu.length; i++) {
    lieu[i].classList="infos lieu";
    lieu[i].insertAdjacentHTML("afterbegin","<span class='small'>Lieu</span> ")
  }

  for (let i = 0; i < personnages.length; i++) {
    personnages[i].insertAdjacentHTML("afterbegin","<span class='small'>Personnages</span> ")
    personnages[i].classList="infos personnages";
  }

  var infos=document.getElementsByClassName('infos');
  var tableau1 = [];

  var childs = container_txt.children;
  for (let i = 0; i < childs.length; i++) {
    // childs[i]
  }
  console.log(childs)
}

function get_all_element(){

}
