import './PageTransition.css'
import { Link } from "react-router"

const PageTransition = () => {
  return(
    <>
      <div className="page-container">
        <div className='page-header'>
          <h3 className='page-title'>Enfin... un test qui a du sens</h3>
        </div>
        <div className="page-body">
          <p>Ici, pas de bonnes ou mauvaises réponses. Pas de cases dans lesquelles te faire rentrer.
            On t’a préparé 10 questions simples, parfois un peu décalées.
            Le but ? T’aider à mieux comprendre ce qui te correspond.
          </p>
        </div>
        <div className='page-footer'>
          <Link to="/form" >
            <button className='hero-button'>Commencer</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default PageTransition
