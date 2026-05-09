import LigneBus from './LigneBus';
import './ListeLignes.css';

function StatReseau({ lignes }) {
    let totalArrets = 0;
    let ligneMax = lignes[0];
    lignes.forEach((ligne) => {
        totalArrets += ligne.arrets;

        if (ligne.arrets > ligneMax.arrets) {
            ligneMax = ligne;
    }
  });
    return (
    <div className="liste-lignes">
      <h2 className="liste-titre">Statistiques Dakar Dem Dikk</h2>

      <p>Nombre de lignes: {lignes.length}</p>
      <p>Nombre d'arret: {totalArrets}</p>
      <h4>Ligne avec le plus d'arret</h4>
        <LigneBus
          key={ligneMax.id}
          numero={ligneMax.numero}
          depart={ligneMax.depart}
          arrivee={ligneMax.arrivee}
          arrets={ligneMax.arrets}
          couleur={ligneMax.couleur}
        />
      
    </div>
  );
}


export default StatReseau;