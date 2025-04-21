import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Result.css'


const Result = () => {
  const location = useLocation();
  const { personality_summary, matched_domains } = location.state;

  const navigate = useNavigate()

  const handleClick = (domain) => {
    navigate(`/domain/${domain.id}`)
  }



  return (
    <>
      <h1 class="result-title">Merci d'avoir passé le test !</h1>

      <div class="result-main">
        <div class="domains-container">
          <h2>Les domaines a explorer</h2>
          <div className="domains-main" >
            {matched_domains.map((domain, index) => (
              <div key={index} class="domains" onClick={() => handleClick(domain)}>
                <div class="domains-text">
                  <h3>{domain.name}</h3>
                  <p>{domain.description}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} className="icon" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="personnality-container">
          <h2 class="personnality-header" >Résumé de ta personnalité</h2>
          <p class="personnality-text">{personality_summary}</p>
        </div>
      </div>
    </>
  );
};

export default Result;
