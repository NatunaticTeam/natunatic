import './style.css';
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
var randomTitle:number = Math.random()
console.debug(randomLink)
console.debug(randomTitle)
var choosenLink:string = "https://natunatic.com"

if (randomLink > 0.5)
{
  choosenLink = "https://natunatic.com"
  console.debug("natunatic webpage")
}
else
{
  console.debug("natunatic yt channel")
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
      <a href="artbook">${i18n.t('header.artbook')}</a>
      <div>
        <a id="projects-button" href="projects">${i18n.t('header.projects')}</a>
        <ul id="projects-list">
          <li><a class="pjlist-element" href="projects?game=${br}">BounceRing</a></li>
          <li><a class="pjlist-element" href="projects?game=${at}">AnimalTower</a></li>
          <li><a class="pjlist-element" href="projects?game=${iv}">Introverse</a></li>
          <li><a class="pjlist-element" href="projects?game=${pt}">PvZ P.T!</a></li>
          <li><a class="pjlist-element" href="projects?game=${ca}">Candance</a></li>
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
      <h2>${i18n.t('main-page.sure')}</h2>
      <h3>${i18n.t('main-page.team-d')}</h3>
      <h5 id="something1">${i18n.t('main-page.advice-click')}</h5>
      <div class="small-spacing"></div>
      <div id="members">
        <div class="person" id="julibros" onclick="window.location.href='https://www.youtube.com/@Julibros'">
          <img src="https://yt3.googleusercontent.com/7JKyQh4oumdOajuJWY0ADyCu_nPZfkrzZs7fusHPV2-zkCJ6mpP7u-vFxBXMemwS7xSwnYKt=s160-c-k-c0x00ffffff-no-rj" alt="n4c" class="pfp"/>
          <p></p>
          <span class="member-name">Julibros</span>
          <p></p>
          <span class="member-roles">${i18n.t('main-page.julibros-roles')}</span>
          <p></p>
          <span class="member-desc">${i18n.t('main-page.julibros-desc')}</span>
        </div>
        <div class="person" id="n4c" onclick="window.location.href='https://www.youtube.com/@n4c-n'">
          <img src="https://yt3.googleusercontent.com/1qE7CfOk4pRJMXAqBy8BaVWeUDL3Z__vhtyhoEyX80E_qUHt5oOD0VwS8R3b1f1vmB6q3Vkz=s160-c-k-c0x00ffffff-no-rj" alt="n4c" class="pfp"/>
          <p></p>
          <span class="member-name">n4c</span>
          <p></p>
          <span class="member-roles">${i18n.t('main-page.n4c-roles')}</span>
          <p></p>
          <span class="member-desc">${i18n.t('main-page.n4c-desc')}</span>
        </div>
        <div class="person" id="aaron" onclick="window.location.href='https://www.youtube.com/@Elmisterio123xd'">
          <img src="https://yt3.googleusercontent.com/MwMib2f-QoKLiguzYLLDqVgqU9pgTBcYY43nSJLepSldVe9rrt3e6lmhHSb3fDCGkYWJOV4q8A=s160-c-k-c0x00ffffff-no-rj" alt="n4c" class="pfp"/>
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
                ${i18n.t('main-page.jeanl1')}
                <div></div>
                ${i18n.t('main-page.jeanl2')}, ${i18n.t('main-page.jeanl3')}, ${i18n.t('main-page.jeanl4')}
                <div></div>
                ${i18n.t('main-page.jeanl5')}
              </span>
            </div>
            <div class="small-person hidden">
              <span class="member-name">someone</span>
              <p></p>
              <span class="member-desc">
                a person that has helped me so much these days,
                they arent reading this most prob, but i still wanted to say thanks -n4c
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

const esLangBtn = document.getElementById('lang-es') as HTMLAnchorElement;
const esCLangBtn = document.getElementById('lang-escl') as HTMLAnchorElement;
const enLangBtn = document.getElementById('lang-en') as HTMLAnchorElement;

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