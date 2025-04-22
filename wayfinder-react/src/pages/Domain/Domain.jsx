import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../../../constants";
import "./Domain.css"

const DomainPage = () => {
  const { domainId } = useParams();
  const navigate = useNavigate();
  const [domain, setDomain] = useState(null);


  useEffect(() => {
    const fetchDomain = async () => {
      try {
        const response = await fetch(`${API_URL}/api/v1/domains/${domainId}`);
        const data = await response.json();
        setDomain(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du domaine :", error);
      }
    };

    fetchDomain();
  }, [domainId]);

  const handleCreatePlan = async() => {
    try {
      const response = await fetch(`${API_URL}/api/v1/plans`, {
        method : 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ domain_id: domainId })
      })
      const plan = await response.json()
      console.log(plan)
      navigate("/plan/" + plan.id )

    } catch (error) {
      console.log("an error occured :", error)
    }
  }

  if (!domain) return <p>Chargement...</p>;

  return (
    <div className="domain-main">
      <div className="domain-header">
        <h1>{domain.name}</h1>
        <button class="hero-button" onClick={handleCreatePlan}>Accéder au plan</button>
      </div>
      <div className="domain-body">
        <div className="domain-infos">
          <div className="domain-fit">
            <h3>Ce métier est fait pour toi si :</h3>
            <ul>
              {domain.fit_description.map((fit, index) => (
                <li key={index} >{fit}</li>
              ))}
            </ul>
          </div>
          <div className="domain-tasks">
            <h3>Ce que tu fera concrétement :</h3>
            <ul>
              {domain.real_tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
        <div class="domain-description">
          <h3>A propos</h3>
          <p>{domain.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DomainPage;
