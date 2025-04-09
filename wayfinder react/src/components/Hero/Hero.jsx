import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-image.png"
import './Hero.css'

const Hero = () => {
  return(
    <>
      <div className="hero-section">
        <div className="hero">
          <h1>Plus qu'un test, un vrai <br/>accompagnement vers <br/>votre <span>AVENIR.</span></h1>
          <Link to="/pagetransition">
            <button className="hero-button">
              Trouver mon métier
            </button>
          </Link>
        </div>
        <img className="hero-img" src={heroImage} alt="illustration avec panneaux" />
      </div>
    </>
  )
}

export default Hero
