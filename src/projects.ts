import './styles/projects.css'
import mainPage from './main'

const urlParams = new URLSearchParams(window.location.search);
const game = urlParams.get('game');

if (game) 
{
    console.debug(`Game: ${game}`)
}
else
{
    console.debug("no game")
}


const defaultContent = /*`
    <div>
        <div id="bouncering" class="card"></div>
        <div id="animaltower" class="card"></div>
        <div id="introverse" class="card"></div>
        <div id="pvzmod" class="card"></div>
        <div id="candance" class="card"></div>
    </div>
`;*/
`
    <div>
        <h1>nothing</h1>
        <h5>did this merely for testing, still a wip</h5>
        <a class="pjlist-element" href="projects?game=${mainPage.br}">BounceRing</a>
        <a class="pjlist-element" href="projects?game=${mainPage.at}">Animal Tower</a>
        <a class="pjlist-element" href="projects?game=${mainPage.iv}">Introverse</a>
        <a class="pjlist-element" href="projects?game=${mainPage.pt}">PvZ: Pizza Time!</a>
        <a class="pjlist-element" href="projects?game=${mainPage.ca}">Candance Adventure</a>
    </div>
`;
const bounceringContent = `
    <div>
        <h1>bouncering</h1>
        <h5>did this merely for testing, still a wip</h5>
        <a class="pjlist-element" href="projects?game=${mainPage.at}">Animal Tower</a>
        <a class="pjlist-element" href="projects?game=${mainPage.iv}">Introverse</a>
        <a class="pjlist-element" href="projects?game=${mainPage.pt}">PvZ: Pizza Time!</a>
        <a class="pjlist-element" href="projects?game=${mainPage.ca}">Candance Adventure</a>
    </div>
`;
const animaltowerContent = `
    <div>
        <h1>animaltower</h1>
        <h5>did this merely for testing, still a wip</h5>
        <a class="pjlist-element" href="projects?game=${mainPage.br}">BounceRing</a>
        <a class="pjlist-element" href="projects?game=${mainPage.iv}">Introverse</a>
        <a class="pjlist-element" href="projects?game=${mainPage.pt}">PvZ: Pizza Time!</a>
        <a class="pjlist-element" href="projects?game=${mainPage.ca}">Candance Adventure</a>
    </div>
`;
const introverseContent = `
    <div>
        <h1>introverse</h1>
        <h5>did this merely for testing, still a wip</h5>
        <a class="pjlist-element" href="projects?game=${mainPage.br}">BounceRing</a>
        <a class="pjlist-element" href="projects?game=${mainPage.at}">Animal Tower</a>
        <a class="pjlist-element" href="projects?game=${mainPage.pt}">PvZ: Pizza Time!</a>
        <a class="pjlist-element" href="projects?game=${mainPage.ca}">Candance Adventure</a>
    </div>
`;
const pvzptContent = `
    <div>
        <h1>pvzpt</h1>
        <h5>did this merely for testing, still a wip</h5>
        <a class="pjlist-element" href="projects?game=${mainPage.br}">BounceRing</a>
        <a class="pjlist-element" href="projects?game=${mainPage.at}">Animal Tower</a>
        <a class="pjlist-element" href="projects?game=${mainPage.iv}">Introverse</a>
        <a class="pjlist-element" href="projects?game=${mainPage.ca}">Candance Adventure</a>
    </div>
`;
const candanceContent = `
    <div>
        <h1>candance</h1>
        <h5>did this merely for testing, still a wip</h5>
        <a class="pjlist-element" href="projects?game=${mainPage.br}">BounceRing</a>
        <a class="pjlist-element" href="projects?game=${mainPage.at}">Animal Tower</a>
        <a class="pjlist-element" href="projects?game=${mainPage.iv}">Introverse</a>
        <a class="pjlist-element" href="projects?game=${mainPage.pt}">PvZ: Pizza Time!</a>
    </div>
`;

switch (game) {
    case "bouncering": {
        console.debug(`content chosen: bouncering`);
        document.querySelector<HTMLDivElement>('#content')!.innerHTML = bounceringContent;
        break;
    }
    case "animaltower": {
        console.debug(`content chosen: animaltower`);
        document.querySelector<HTMLDivElement>('#content')!.innerHTML = animaltowerContent;
        break;
    }
    case "introverse": {     
        console.debug(`content chosen: introverse`);
        document.querySelector<HTMLDivElement>('#content')!.innerHTML = introverseContent;
        break;
    }
    case "pvzpt": {      
        console.debug(`content chosen: pvzmod`);
        document.querySelector<HTMLDivElement>('#content')!.innerHTML = pvzptContent;
        break;
    }
    case "candanceadventure": {  
        console.debug(`content chosen: candance`);
        document.querySelector<HTMLDivElement>('#content')!.innerHTML = candanceContent;
        break;
    }
    default:
        console.debug("no content chosen, default instead")
        document.querySelector<HTMLDivElement>('#content')!.innerHTML = defaultContent;
        break;
}
        