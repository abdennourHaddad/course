<?php
spl_autoload_register(function ($className) {
     include ("lib/{$className}.class.php");
 });

//require_once('lib/watchdog.php'); // sentinelle

require_once('lib/fonctions_html.php');
require_once('lib/initDataLayer.php');


try {

    $data_identite="";
    if ( isset($_SESSION['ident'])) {
        $texte_identite = htmlspecialchars(json_encode($_SESSION['ident']));
        $data_identite= "data-identite ='$texte_identite'";
    }

    // Parcours -(étapes)-
    $etapes = $data->getEtapes();
    $listeEtapes = createEtapeItems($etapes);

    require('views/pagePrincipale.php');

}
catch (ParmsException $e) {
    require "views/pageErreur.php";
}

?>
