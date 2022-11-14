<?php
    /*
      Exemple de résultat de la fonction createEtapeItem :
      createEtapeItem

      <li data-numero="2" data-distance="199" data-date="2022-07-02" data-nom="Roskilde > Nyborg">Roskilde &gt; Nyborg</li>

      (à respecter)
    */
    function createEtapeItem($etape){
        $res = "<li data-numero=\"{$etape['numero']}\" data-distance=\"{$etape['distance']}\" data-date=\"{$etape['date']}\" data-nom=\"{$etape['nom']}\"> {$etape['nom']}</li>";
        return $res;
    }

    function createEtapeItems($liste){
        $res = "";
        foreach ($liste as $etape) {
            $etp = createEtapeItem($etape);
            $res .= $etp;
        }
        return $res;
    }
?>
