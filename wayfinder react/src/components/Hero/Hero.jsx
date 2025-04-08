import { Link } from "react-router-dom";

const Hero = () => {
  return(
    <>
      <div>
        <h1>Plus qu'un test, un vrai <br/>accompagnement vers <br/>votre <span>AVENIR.</span></h1>
        <Link to="/form">Trouver mon métier</Link>
      </div>
    </>
  )
}

export default Hero
