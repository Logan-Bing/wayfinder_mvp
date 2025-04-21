import { Links, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../../../constants";

const DomainPage = () => {
  const { domainId } = useParams();
  const [domain, setDomain] = useState(null);
  console.log(domainId)

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

  if (!domain) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{domain.name}</h1>
      <p>{domain.description}</p>
      <ul>
        {domain.fit_description.map((fit) => (
          <li>{fit}</li>
        ))}
      </ul>
      <ul>
        {domain.real_tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default DomainPage;
