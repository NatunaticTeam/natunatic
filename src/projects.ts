import './styles/projects.css' // imports ig
import csharpLogo from './assets/csharp.svg'
import gmlLogo from './assets/gml.svg'
import haxeLogo from './assets/haxe.svg'
import cppLogo from './assets/cpp.svg'
import luauLogo from './assets/luau.svg'
import mango67 from './assets/mango67.png'
import mainPage from './main'
import i18n from './localization';
//#region some checkers ig
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
//#endregion

//#region some things
const randomChoice1:number = Math.random()
console.debug(randomChoice1)
var text1:string = 'Pick One'
if (randomChoice1 < 0.1)
{
    text1 = `MUSTARD MANGO 67 BOIIII THIS IS SO TUFF <img src="${mango67}" id="tuff" alt="MUSTARD">`
}
else
{
    text1 = `${i18n.t('projects.textpick')}`;
}
//#endregion

//#region contents
const defaultContent = `
<div>
    <div id="curtain"></div>
    <div id="ididntthinkaboutthenameofthis">
        <span>${text1}</span>
    </div>
    <div id="cards">
        <div id="bouncering" class="card">
            <div class="upperCard">
                <span class="cardType">Game</span>
                <span class="cardName" id="bounceringcardName">BounceRing</span>
                <span class="cardLang">C#</span>
                <img src="${csharpLogo}" class="lang-logo"/>
            </div>
        </div>
        <div id="animaltower" class="card" onclick="">
            <div class="upperCard">
                <span class="cardType">Game</span>
                <span class="cardName" id="animaltowercardName">Animal Tower</span>
                <span class="cardLang">GML</span>
                <img src="${gmlLogo}" class="lang-logo" id="gml-lang-logo"/>
            </div>
        </div>
        <div id="introverse" class="card" onclick="">
            <div class="upperCard">
                <span class="cardType">Mod</span>
                <span class="cardName" id="introversecardName">Introverse</span>
                <span class="cardLang">Haxe</span>
                <img src="${haxeLogo}" class="lang-logo" id="haxe-lang-logo"/>
            </div>
        </div>
        <div id="pvzmod" class="card" onclick="">
            <div class="upperCard">
                <span class="cardType">Mod</span>
                <span class="cardName" id="pvzptcardName">PvZ: Pizza Time!</span>
                <span class="cardLang">C++</span>
                <img src="${cppLogo}" class="lang-logo" id="cpp-lang-logo"/>
            </div>
        </div>
        <div id="candance" class="card" onclick="">
            <div class="upperCard">
                <span class="cardType">Game</span>
                <span class="cardName" id="candancecardName">Candance Adventure</span>
                <span class="cardLang">Luau</span>
                <img src="${luauLogo}" class="lang-logo" id="luau-lang-logo"/>
            </div>
        </div>
    </div>
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
//#endregion



// content switcher
// works by checking the "game" var and switching by result, if !game then load default projects page
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
        console.debug("invalid/no content chosen, default instead")
        document.querySelector<HTMLDivElement>('#content')!.innerHTML = defaultContent;
        break;
}

//#region getting some elements from html
const rootelement = document.documentElement
const curtainDiv = document.getElementById('curtain') as HTMLDivElement
const bounceringCard = document.getElementById('bouncering') as HTMLDivElement
const animaltowerCard = document.getElementById('animaltower') as HTMLDivElement
const introverseCard = document.getElementById('introverse') as HTMLDivElement
const pvzptCard = document.getElementById('pvzmod') as HTMLDivElement
const candanceCard = document.getElementById('candance') as HTMLDivElement
const a_text = document.getElementById('ididntthinkaboutthenameofthis') as HTMLDivElement
//#endregion

//#region functions and stuff
function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
    
async function chooseNewPage(page:string) {
    console.debug("asynchronously waiting")
    rootelement.style.overflow = "hidden";
    a_text.style.display = "none";
    curtainDiv.style.display = "flex";
    curtainDiv.style.animation = "fadeout 2.2s";
    curtainDiv.style.margin = "-9.45rem -40rem";
    await delay(2000)
    location.href = "?game="+page;
}
//#endregion
    
//#region eventlisteners
bounceringCard.addEventListener('click', () => {
    console.debug("clicked bouncering");
    chooseNewPage('bouncering');
    bounceringCard.style.animation = "scaleCard 5s";
    animaltowerCard.style.display = "none";
    introverseCard.style.display = "none";
    pvzptCard.style.display = "none";
    candanceCard.style.display = "none";
})
animaltowerCard.addEventListener('click', () => {
    console.debug("clicked animaltower");
    chooseNewPage('animaltower');
    animaltowerCard.style.animation = "scaleCard 5s";
    bounceringCard.style.display = "none";
    introverseCard.style.display = "none";
    pvzptCard.style.display = "none";
    candanceCard.style.display = "none";
})
introverseCard.addEventListener('click', () => {
    console.debug("clicked introverse");
    chooseNewPage('introverse');
    introverseCard.style.animation = "scaleCard 5s";
    animaltowerCard.style.display = "none";
    bounceringCard.style.display = "none";
    pvzptCard.style.display = "none";
    candanceCard.style.display = "none";
})
pvzptCard.addEventListener('click', () => {
    console.debug("clicked pvzmod");
    chooseNewPage('pvzpt');
    pvzptCard.style.animation = "scaleCard 5s";
    animaltowerCard.style.display = "none";
    introverseCard.style.display = "none";
    bounceringCard.style.display = "none";
    candanceCard.style.display = "none";
})
candanceCard.addEventListener('click', () => {
    console.debug("clicked candance");
    chooseNewPage('candanceadventure');
    candanceCard.style.animation = "scaleCard 5s";
    animaltowerCard.style.display = "none";
    introverseCard.style.display = "none";
    pvzptCard.style.display = "none";
    bounceringCard.style.display = "none";
})
//#endregion
