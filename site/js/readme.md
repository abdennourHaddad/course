# Pages dynamiques -

## L2_G2_Informatique

@haddad
@hadjemi

## Contexte

Dans cette fiche, on a construit une page web dynamique utilisant des services web fournissant une réponse en JSON.

## Mise en place et manipulation

Pour un premier aperçu

* Ouvrez Ouvrez le script principal `index.php` dans le navigateur et ouvrez l’outil de développement.Il  faut
d’abord vérifier l’absence de message d’erreur javascript dans l’onglet console.
Dans l’onglet « inspecteur » inspectez le contenu de l’élément select. Vous devez y trouver toutes les
options, avec leurs attributs.

La liste des étapes ainsi que celle des coureurs s’affichent dans la page, sans rechargement de celle-ci.
De plus le détail d’une étape s’affiche quand on survole son nom avec la souris.
De même pour un coureur.

Vous avez la possibilité de spécifier des paramètres **HTTP** en invoquant les différents `services/` tels que :

* le service `getEquipes.php` qui ne prend pas de paramètres.
* le service `getCoureurs.php` qui prend en paramètres : `equipe` et `subs_nom²` qui sont des chaines de caractères.
* le service `getClassement.php` qui pend en compte un paramètre obligatoire `etape` qui est un entier représentant le numéro de l'étape.

Un clic sur le nom d’une étape affiche le classement à l’arrivée de cette étape :blush:
