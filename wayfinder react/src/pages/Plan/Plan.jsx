import "./Plan.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../../constants"

const Plan = () => {

  const { planId } = useParams()
  const [plan, setPlan] = useState(null)

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await fetch(`${API_URL}/api/v1/plans/${planId}`);
        const data = await response.json();
        setPlan(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du domaine :", error);
      }
    };

    fetchPlan();
  }, [planId]);

  if (!plan) return <p>Chargement...</p>;

  return (
    <>
      <h1>Plan pour être : {plan.domain.name}</h1>
      <div>
        {plan.plan_tasks.map((task, index) => (
          <div key={index} className="task-block">
            <h3>{task.domain_task.name}</h3>
            <p><strong>Objectif :</strong> {task.domain_task.objective}</p>
            <p><strong>Description :</strong> {task.domain_task.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Plan
