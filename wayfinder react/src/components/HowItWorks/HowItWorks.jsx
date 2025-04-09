import './HowItWorks.css';
import iconOne from '../../assets/icon-one.png';

const HowItWorks = () => {
  return(
    <>
      <div className="second-section">
        <div className="header-second-section">
          <h2>Comment ça marche ?</h2>
        </div>
        <div className="cards-container">
          <div className="card">
            <div className="icon-card">
              <img src={iconOne} alt="icon-one" />
            </div>
            <div className="header-card">
              <p>Étape 1</p>
            </div>
            <div className="body-card">
              <p>Un mini parcours introspectif en 5 étapes. Des QCM simples et rapides pour t’aider à mieux cerner tes envies, tes forces, et ce que tu veux éviter.</p>
            </div>
          </div>
          <div className="card" id='color-card'>
            <div className="icon-card">
              <img src={iconOne} alt="icon-one" />
            </div>
            <div className="header-card">
              <p>Étape 2</p>
            </div>
            <div className="body-card">
              <p>L’IA analyse tes réponses et te propose un résumé clair. <br />Tu reçois : <br />
              - Un plan sur mesure <br />
              - Tes points forts <br />
              - Des domaines à explorer
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon-card">
              <img src={iconOne} alt="icon-one" />
            </div>
            <div className="header-card">
              <p>Étape 3</p>
            </div>
            <div className="body-card">
              <p>Tu choisis un domaine qui t’attire.L’app te génère un plan personnalisé avec des actions simples à faire cette semaine pour tester concrètement.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
