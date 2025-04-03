import React, { useState, useEffect } from 'react';
import { API_URL } from '../../../constants';

const Domains = () => {
  const [domains, setDomains] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null)

    useEffect(() => {
      async function loadDomains(){
        try {
          const response = await fetch (API_URL)
          if(response.ok){
            const json = await response.json();
            setDomains(json)
          } else {
            throw response;
          }
        } catch (error) {
            setError("An error occurred. Awkward...");
            console.log('an error occured:', error);
        } finally {
          setLoading(false);
        }
      }
      loadDomains();
    },[])

  return (
    <div>
      {domains.map((domain) => (
        <div key={domain.id} className='domain-container'>
          <h2>{domain.name}</h2>
          <p>{domain.description}</p>
        </div>
      ))}
    </div>
)
}



export default Domains
