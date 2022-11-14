<?php
/**
 * Indique au navigateur qu'il doit afficher du texte ordinaire, sans l'interpréter comme de l'HTML :
*/
header("Content-Type: text/plain;charset=UTF-8");

spl_autoload_register(function($classe){require "lib/$classe.class.php";}); // règle de chargement des classes

require("etc/dsn_filename.php"); // definition de DSN_FILENAME

/**
 * Inclusion du fichier de définitions de fonctions :
 */
require_once('lib/fonctions_html.php');
require_once('lib/initDataLayer.php');




/**  ---------------------  TESTS  ---------------------   */

function testGetEtapes() {
    $data = new DataLayer(DSN_FILENAME);
    $step = 1;
    $etape = $data->getClassement($step);
    echo " Resultat getClassement de l'etape -({$step})- : -> ";
    return $etape;
}

print_r(testGetEtapes());

?>