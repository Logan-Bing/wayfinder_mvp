import "./Plan.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../../constants"


const Plan = () => {

  const { planId } = useParams()
  const [plan, setPlan] = useState(null)
  const [activeTaskIndex, setActiveTaskIndex] = useState(null)
  const [completedTasks, setCompletedTasks] = useState([])

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

  const handleToggle = (taskId) => {
    setActiveTaskIndex(taskId === activeTaskIndex ? null : taskId)
  }

  const toggleTaskCompletion = (taskId) => {
    if (completedTasks.includes(taskId)) {
      // Si déjà complétée, on la retire de la liste
      setCompletedTasks(completedTasks.filter(id => id !== taskId));
    } else {
      // Sinon, on l’ajoute à la liste
      setCompletedTasks([...completedTasks, taskId]);
    }
  };

  if (!plan) return <p>Chargement...</p>;

  const todoTasks = plan.plan_tasks.filter(t => !completedTasks.includes(t.id));
  const doneTasks = plan.plan_tasks.filter(t => completedTasks.includes(t.id));

  return (
    <>
      <h1>Plan pour être : {plan.domain.name}</h1>
      <div className="task-main">
        <div className="todo-container">
          <div className="task-header">
            <p>A faire</p>
          </div>
          <div className="task-container" >
            {todoTasks.map((task, index) => (
              <div key={index} className="task-block">
                <div className="task-name-header">
                  <input type="checkbox"
                    checked={completedTasks.includes(task.id)}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                  <p>{task.domain_task.name}</p>
                  <i className={`fa-solid fa-chevron-right ${activeTaskIndex === task.id ? "rotate" : ""}`} onClick={() => handleToggle(task.id)}></i>
                </div>
                <p className={`task-infos ${activeTaskIndex === task.id ? "visible" : ""}`}><strong>Objectif :</strong> {task.domain_task.objective}</p>
                <p className={`task-infos ${activeTaskIndex === task.id ? "visible" : ""}`}><strong>Description :</strong> {task.domain_task.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="done-container">
          <div className="task-header done">
            <p>Terminé</p>
          </div>
          <div className="task-container done" >
            {doneTasks.map((task, index) => (
              <div key={index} className="task-block">
              <div className="task-name-header">
                <input type="checkbox"
                  checked={completedTasks.includes(task.id)}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                <p>{task.domain_task.name}</p>
                <i className={`fa-solid fa-chevron-right ${activeTaskIndex === task.id ? "rotate" : ""}`} onClick={() => handleToggle(task.id)}></i>
              </div>
              <p className={`task-infos ${activeTaskIndex === task.id ? "visible" : ""}`}><strong>Objectif :</strong> {task.domain_task.objective}</p>
              <p className={`task-infos ${activeTaskIndex === task.id ? "visible" : ""}`}><strong>Description :</strong> {task.domain_task.description}</p>
            </div>
            ))}
          </div>
        </div>
        <div className="journal-main">
          <p>Mon journal de bord</p>
          <div className="journal-text">
            <textarea
              placeholder="Écris ici ton ressenti, tes progrès ou tes doutes..."
              rows="5"
              cols="40"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Plan
