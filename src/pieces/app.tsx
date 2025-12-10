// import { ProjectsComponent, LanguagesComponent } from '../components/header.tsx';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import '../styles/header.css';
import PageArtbook from './artbook';
import PageIndex from '.';


const randomLink:number = Math.random();
let choosenLink:string = "https://natunatic.com";

if (randomLink > 0.5)
  choosenLink = "https://natunatic.com";
else
  choosenLink = "https://www.youtube.com/@NATUNATIC_Official";

function App() {
  return (
  <BrowserRouter>
    <div>
      <div id="header-nav">
        <a href={choosenLink}>natunatic.com</a>
        <span>/</span>
        <Link to="/">index</Link>
        <Link to="/artbook">artbook</Link>
        <div>
          <a id="projects-button" className="disabled">projects</a>
          {/*
          <ul id="projects-list">
            <ProjectsComponent content="BounceRing" reference='bouncering' />
            <ProjectsComponent content="Animal Tower" reference='animaltower' />
            <ProjectsComponent content="Introverse" reference='introverse' />
            <ProjectsComponent content="PvZ: Pizza Time!" reference='pvzpt' />
            <ProjectsComponent content="Candance Adventure" reference='candanceadventure' />
          </ul>*/}
        </div>
        <div>
          <a id="languages-button" className='disabled'>languages</a>
          {/*
          <ul id="languages-list">
            <LanguagesComponent lang='en' content='english'/>
            <LanguagesComponent lang='es' content='spanish'/>
          </ul>*/}
        </div>
      </div>
    </div>

    <Routes>
      <Route path='/artbook' element={<PageArtbook />} />
      <Route path='/' element={<PageIndex />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;