// src/pages/Result.jsx
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const { personality_summary, matched_domains } = location.state;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Résultat du test</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Résumé de ta personnalité</h2>
        <p>{personality_summary}</p>
      </section>

      <section>
        <h2>Métiers suggérés</h2>
        {matched_domains.map((domain, index) => (
          <div key={index} style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
            <h3>{domain.name}</h3>
            <p>{domain.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Result;
