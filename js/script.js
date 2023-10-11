window.addEventListener('load', setup);

function setup(){

  var p = document.getElementsByTagName("p");
  console.log(p[0])

  // Supprimer les timecodes ( recherche dans tout les paragraphes si un paragraphe commence avec un nombre )
  for (let i = 0; i < p.length; i++) {
    if(  p[i].innerHTML.match(/^\d/)){
      p[i].remove()
    }
  }

  // Chaque séquence saute une page sauf pour la première page
  var em = document.getElementsByTagName('em');
  em[0].style.breakBefore = "avoid";


}
