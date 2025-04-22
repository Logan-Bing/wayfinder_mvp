import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './MyPlan.css'

const MyPlans = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedPlanIds = JSON.parse(localStorage.getItem("savedPlanIds") || "[]");
    const savedPlans = savedPlanIds.map(id => {
      const data = localStorage.getItem(`plan-${id}`);
      return data ? JSON.parse(data) : null;
    }).filter(Boolean);
    setPlans(savedPlans);
  }, []);

  return (
    <div className="my-plans">
      <h1>Mes plans</h1>
      { Array.isArray(plans) && plans.map(plan => {
        const completedCount = plan.plan_tasks.filter(t => t.completed).length;
        return (
          <div key={plan.id} className="plan-card" onClick={() => navigate(`/plan/${plan.id}`)}>
            <h2>{plan.domain.name}</h2>
            <p>{completedCount} tâches complétées</p>
            <p><em>{plan.journal?.slice(0, 80)}...</em></p>
          </div>
        );
      })}
    </div>
  );
};

export default MyPlans;
