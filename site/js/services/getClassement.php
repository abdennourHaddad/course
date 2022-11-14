<?php

set_include_path('..'.PATH_SEPARATOR);
require_once('lib/common_service.php');
require_once('lib/initDataLayer.php');
require_once('lib/fonctions_parms.php');

try {
    $etape = checkUnsignedInt('etape', $mandatory = TRUE);
    //$step = 2;
    $classement = $data->getClassement($etape);
    produceResult($classement);
}
catch (ParmsException $e) {
    produceError($e->getMessage());
}








?>
