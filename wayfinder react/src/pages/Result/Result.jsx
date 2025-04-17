import { useLocation } from "react-router-dom";
import './Result.css'


const Result = () => {
  const location = useLocation()
  const { matched_domains } = location.state || {}

  return (
    <div className="results">
      <h2>Métiers suggérés</h2>
      <ul>
        {matched_domains?.map((domain) => (
          <li key={domain.id}>
            <h3>{domain.name}</h3>
            <p>{domain.fit_description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Result
