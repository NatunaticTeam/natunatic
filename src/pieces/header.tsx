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
        <a href="artbook">artbook</a>
        <div>
          <a id="projects-button" className="disabled">projects</a>
          {/*<ul id="projects-list">
            <ProjectsComponent content="BounceRing" reference='bouncering' />
            <ProjectsComponent content="Animal Tower" reference='animaltower' />
            <ProjectsComponent content="Introverse" reference='introverse' />
            <ProjectsComponent content="PvZ: Pizza Time!" reference='pvzpt' />
            <ProjectsComponent content="Candance Adventure" reference='candanceadventure' />
          </ul>*/}
        </div>
        <div>
          <a id="languages-button" className="disabled">languages</a>
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