import './styles/style.css';
import './styles/team.css';
import _n4cPfp from './assets/n4c.jpg';
import _julibrosPfp from './assets/julibros.jpg';
import _aaronPfp from './assets/aaron.jpg';
import i18n from './localization';

//#region sum extra shit
const br:string = "BounceRing".toLowerCase();
const at:string = "AnimalTower".toLowerCase();
const iv:string = "Introverse".toLowerCase();
const pt:string = "PvZPT".toLowerCase();
const ca:string = "CandanceAdventure".toLowerCase();
document.cookie = "lang=en";

var randomLink:number = Math.random()
var choosenLink:string = "https://natunatic.com"

if (randomLink > 0.5)
{
  choosenLink = "https://natunatic.com"
  //console.debug("natunatic webpage")
}
else
{
  //console.debug("natunatic yt channel")
  choosenLink = "https://www.youtube.com/@NATUNATIC_Official"
}
console.debug(choosenLink)
//#endregion


// add this later: <li><a class="langlist-element" id="lang-escl">${i18n.t('header.language-list.es-CL')}</a></li>
document.querySelector<HTMLDivElement>('#main')!.innerHTML = `
  <div>
    <div id="header-nav">
      <a href="${choosenLink}">natunatic.com</a>
      <span>/</span>
      <a href=".">${i18n.t('header.index')}</a>
      <a href="./#team">${i18n.t('header.team')}</a>
      <a class="disabled">${i18n.t('header.artbook')}</a>
      <div>
        <a id="projects-button" class="disabled">${i18n.t('header.projects')}</a>
        <!--<ul id="projects-list">
          <li><a class="pjlist-element" href="projects?game=${br}">BounceRing</a></li>
          <li><a class="pjlist-element" href="projects?game=${at}">AnimalTower</a></li>
          <li><a class="pjlist-element" href="projects?game=${iv}">Introverse</a></li>
          <li><a class="pjlist-element" href="projects?game=${pt}">PvZ P.T!</a></li>
          <li><a class="pjlist-element" href="projects?game=${ca}">Candance</a></li>
        </ul>-->
        <ul id="projects-list">
          <li><span class="pjlist-element">${i18n.t('under-construction')}</span></li>
        </ul>
      </div>
      <div>
        <a id="languages-button">${i18n.t('header.languages')}</a>
        <ul id="languages-list">
          <li><a class="langlist-element" id="lang-en">${i18n.t('header.language-list.en')}</a></li>
          <li><a class="langlist-element" id="lang-es">${i18n.t('header.language-list.es')}</a></li>
        </ul>
      </div>
    </div>
    <div id="content"></div>
  </div>
`;

document.querySelector<HTMLDivElement>('#content')!.innerHTML = `
  <h1>${i18n.t('main-page.welcome')}</h1>
  <h5>${i18n.t('main-page.welcome-desc')}</h5>
  <div class="spacing"></div>
    <div id="team">
      <div class="small-spacing"></div>
      <div class="small-spacing"></div>
      <!-- team section down here -->
      <h2>${i18n.t('main-page.sure')}</h2>
      <h3>${i18n.t('main-page.team-d')}</h3>
      <h5 id="something1">${i18n.t('main-page.advice-click')}</h5>
      <div class="small-spacing"></div>
      <div id="members">
        <div class="person" id="julibros" onclick="window.location.href='https://www.youtube.com/@Julibros'">
          <img src="${_julibrosPfp}" alt="julibros" class="pfp"/>
          <p></p>
          <span class="member-name">Julibros</span>
          <p></p>
          <span class="member-roles">${i18n.t('main-page.julibros-roles')}</span>
          <p></p>
          <span class="member-desc">${i18n.t('main-page.julibros-desc')}</span>
        </div>
        <div class="person" id="n4c" onclick="window.location.href='https://www.youtube.com/@n4c-n'">
          <img src="${_n4cPfp}" alt="n4c" class="pfp"/>
          <p></p>
          <span class="member-name">n4c</span>
          <p></p>
          <span class="member-roles">${i18n.t('main-page.n4c-roles')}</span>
          <p></p>
          <span class="member-desc">${i18n.t('main-page.n4c-desc')}</span>
        </div>
        <div class="person" id="aaron" onclick="window.location.href='https://www.youtube.com/@Elmisterio123xd'">
          <img src="${_aaronPfp}" alt="aaron" class="pfp"/>
          <p></p>
          <span class="member-name">Elmisterio123x</span>
          <p></p>
          <span class="member-roles">${i18n.t('main-page.aaron-roles')}</span>
          <p></p>
          <span class="member-desc">${i18n.t('main-page.aaron-desc')}</span>
          </div>
        </div>
        <div id="special-thanks">
          <h3>${i18n.t('main-page.special-thx')}</h3>
          <div id="special-thanks-persons">
            <div class="small-person">
              <span class="member-name">jean</span>
              <p></p>
              <span class="member-desc">
                ${i18n.t('main-page.jean.jeanl1')}
                <div></div>
                ${i18n.t('main-page.jean.jeanl2')} ${i18n.t('main-page.jean.jeanl3')} ${i18n.t('main-page.jean.jeanl4')}
                <div></div>
                ${i18n.t('main-page.jean.jeanl5')}
              </span>
            </div>
            <!-- this ones dedicated to the person i care for the most in the world :3 -->
            <div class="small-person hidden" id="isas-frame">
              <!--<span class="member-name">isa</span>
              <p></p>
              <span class="member-desc">
                ${i18n.t('main-page.isa.desc')}
              </span>-->
            </div>
          </div>
        </div>
      </div>
    </div>
`;

const esLangBtn = document.getElementById('lang-es') as HTMLAnchorElement;
// const esCLangBtn = document.getElementById('lang-escl') as HTMLAnchorElement;
const enLangBtn = document.getElementById('lang-en') as HTMLAnchorElement;
const isas_censored_text = document.getElementById('isas-censored-text') as HTMLSpanElement;
let isastexthidden: boolean = true;

/*isas_censored_text.addEventListener('click', () => {
  if (isastexthidden == true) {
    console.debug("didfalse")
    isastexthidden = false;
  }
  else {
    console.debug("didtrue")
    isastexthidden = true;
  }

  if (isastexthidden == true) {
    console.debug("istrue")
    isas_censored_text.style.color = '#000000';
    isas_censored_text.style.backgroundColor = '#000000';
  }
  else {
    console.debug("isfalse")
    isas_censored_text.style.color = '#ffffff';
    isas_censored_text.style.backgroundColor = '#00000044';
  }
});*/

esLangBtn.addEventListener('click', () => {
  i18n.changeLanguage('es').then(() => {
    document.cookie = "lang=es";
    console.debug(document.cookie);
    location.reload();
  });
});

enLangBtn.addEventListener('click', () => {
  i18n.changeLanguage('en').then(() => {
    document.cookie = "lang=en";
    console.debug(document.cookie);
    location.reload();
  });
});
/*
esCLangBtn.addEventListener('click', () => {
  i18n.changeLanguage('es_CL').then(() => {
    document.cookie = "lang=es_CL";
    console.debug(document.cookie);
    location.reload();
  });
});
*/

export default {
  br, at, iv, pt, ca
}
