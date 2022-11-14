<?php 
set_include_path('..'.PATH_SEPARATOR);
require_once('lib/common_service.php');
require_once('lib/initDataLayer.php');
require_once('lib/fonctions_parms.php');

try {
    
    $subst_nom = checkString('subst_nom', $defaultValue = '', $mandatory = false);
    $equipe = checkString('equipe', $defaultValue = '', $mandatory = false);


    if ($equipe == null && $subst_nom == null) {
        $coureurs = $data->getCoureurs();    
    }
    elseif ($equipe !== null && $subst_nom == null) {
        $coureurs = $data->getCoureurs($equipe);
    }
    elseif ($equipe == null && $subst_nom !== null ) {
        $coureurs = $data->getCoureurs($subst_nom);
    }
    else {
        $coureurs = $data->getCoureurs($equipe, $subst_nom);
    }

    produceResult($coureurs);
}
catch (PDOException $e) {
    produceError($e->getMessage());
}





?>