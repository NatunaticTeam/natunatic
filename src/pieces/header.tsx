import ProjectsComponent from '../components/header.tsx'
import '../styles/header.css'

const randomLink:number = Math.random()
let choosenLink:string = "https://natunatic.com"

if (randomLink > 0.5)
  choosenLink = "https://natunatic.com"
else
  choosenLink = "https://www.youtube.com/@NATUNATIC_Official"

function MainHeader() {
  return (
  <>
    <div>
      <div id="header-nav">
        <a href={choosenLink}>natunatic.com</a>
        <span>/</span>
        <a href=".">index</a>
        <a href="./#team">team</a>
        <a className="disabled">artbook</a>
        <div>
          <a id="projects-button" className="disabled">projects</a>
          {/*<ul id="projects-list">
            <li><a className="pjlist-element" href="projects?game={br}">BounceRing</a></li>
            <li><a className="pjlist-element" href="projects?game={at}">AnimalTower</a></li>
            <li><a className="pjlist-element" href="projects?game={iv}">Introverse</a></li>
            <li><a className="pjlist-element" href="projects?game={pt}">PvZ P.T!</a></li>
            <li><a className="pjlist-element" href="projects?game={ca}">Candance</a></li>
            </ul>*/}
          <ul id="projects-list">
            <li><span className="pjlist-element">under construction</span></li>
          </ul>
        </div>
        <div>
          <a id="languages-button">languages (exp.)</a>
          <ul id="languages-list">
            <li><a className="langlist-element" id="lang-en">unavailable at the moment</a></li>
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

export default MainHeader