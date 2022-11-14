
window.addEventListener('load',initForm);
window.addEventListener('load',initEtapes);

function initEtapes(tab){
  let liste = document.getElementById("etapes");
  for (item of liste.querySelectorAll('li')){
    item.addEventListener('mouseenter',addDetailEtape);
    item.addEventListener('mouseleave',removeDetailEtape);
    item.addEventListener('click',loadClassement);
    
  }
}

function addDetailEtape(ev){
  const item = ev.currentTarget;
  d = new Date(item.dataset.date);
  infos  = `<div class="info"><p>${item.dataset.nom}</p><p>le ${d.toLocaleDateString()} : ${item.dataset.distance} km</p></div>`;
  item.insertAdjacentHTML('beforeend',infos);
}
function removeDetailEtape(ev){
  const item = ev.currentTarget;
  item.querySelector('div.info').remove();
}


function loadClassement(ev){
  ev.preventDefault();
  let url = 'services/getClassement.php?etape=' + this.dataset['numero'];
  fetchFromJson(url)
  .then(processAnswer)
  .then(displayClassement);
  
}


/*         §§   à compléter §§                */
function displayClassement(classement){
  let table = document.getElementById('classement');
  table.innerHTML = '';
  let caption = document.createElement('caption');
  caption.textContent = item.dataset.nom;  
  table.appendChild(caption);
  let trEntete = document.createElement('tr');
  for(let k of ['nom', 'dossard', 'chrono', 'rang']) {
    let th = document.createElement('td');
    th.textContent = k;
    trEntete.appendChild(th);
  }
  table.appendChild(trEntete);
  for(let coureur of classement) {
    let tr = document.createElement('tr');
    for(let k of ['nom', 'dossard', 'chrono', 'rang']) {
      let td = document.createElement('td');
      td.textContent = coureur[k];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function initForm(){
  fetchFromJson('services/getEquipes.php')
  .then(processAnswer)
  .then(makeOptions);

  document.forms.form_coureurs.addEventListener("submit", sendForm);
}

function processAnswer(answer){
  if (answer.status == "ok")
    return answer.result;
  else
    throw new Error(answer.message);
}


function makeOptions(tab){
  for(let equipe of tab) {
    let option = document.createElement('option');
    option.textContent = equipe.nom;
    option.value = equipe.nom;
    document.forms.form_coureurs.equipe.appendChild(option);
    for (let k of ['directeur', 'couleur']) {
      option.dataset[k] = equipe [k];
    }
  }
}


function sendForm(ev){  // form event listener
  ev.preventDefault(); // empêche l’envoi normal
  let args = new FormData(this); // données du formulaire
  let queryString = new URLSearchParams(args);
  let url = 'services/getCoureurs.php?' + queryString;
  fetchFromJson(url)
  .then(processAnswer)
  .then(makeCoureursItems);

}


function makeCoureursItems(tab){
  let coureurs = document.getElementById('coureurs');
  coureurs.innerHTML = "";
  for (let coureur of tab) {
    let li = document.createElement('li');
    li.textContent = coureur.nom;
    coureurs.appendChild(li);
    for (let k of ['nom', 'id', 'equipe', 'taille']) {
      li.dataset[k] = coureur[k];
    }
    //li.addEventListener('click', fetchCoureurs);
    li.addEventListener('mouseenter', addDetailCoureur);
    li.addEventListener('mouseleave',removeDetailCoureur);
  }
  /* chaque item <li> comportera les attributs data-id data-nom data-equipe data-taille
    contenant les valeurs respectives de id,nom, equipe, taille du coureurs
  */
}


function addDetailCoureur(ev){
  const item = ev.currentTarget;
  infos  = `<div class="info"><p>${item.dataset.nom}</p><p>équipe${item.dataset.equipe} taille : ${item.dataset.taille} </p></div>`;
  item.insertAdjacentHTML('beforeend',infos);
}

function removeDetailCoureur(ev){
  const item = ev.currentTarget;
  item.querySelector('div.info').remove();
}
