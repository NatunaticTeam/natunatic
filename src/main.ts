import './style.css'
import n4cPfp from './assets/n4c.jpg'
import julibrosPfp from './assets/julibros.jpg'
import aaronPfp from './assets/aaron.jpg'

const br = "BounceRing".toLowerCase();
const at = "AnimalTower".toLowerCase();
const iv = "Introverse".toLowerCase();
const pt = "PvZPT".toLowerCase();
const ca = "CandanceAdventure".toLowerCase();

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


document.querySelector<HTMLDivElement>('#main')!.innerHTML = `
  <div>
    <div id="header-nav">
      <a href="${choosenLink}">natunatic.com</a>
      <span>/</span>
      <a href=".">index</a>
      <a href="./#team">team</a>
      <a href="artbook">artbook</a>
      <div>
        <a id="projects-button" href="projects">projects</a>
        <ul id="projects-list">
          <li><a class="pjlist-element" href="projects?game=${br}">BounceRing</a></li>
          <li><a class="pjlist-element" href="projects?game=${at}" onclick="">AnimalTower</a></li>
          <li><a class="pjlist-element" href="projects?game=${iv}">Introverse</a></li>
          <li><a class="pjlist-element" href="projects?game=${pt}">PvZ P.T!</a></li>
          <li><a class="pjlist-element" href="projects?game=${ca}">Candance</a></li>
        </ul>
      </div>
    </div>
    <div id="content">
  </div>
`;

document.querySelector<HTMLDivElement>('#content')!.innerHTML = `
  <h1>welcome to natunatic!</h1>
      <h5>page is still a very big wip but we finally decided to keep this design bc julibros really liked it</h5>
      <div class="spacing"></div>
      <div id="team">
        <div class="small-spacing"></div>
        <div class="small-spacing"></div>
        <h2>of course we present ourselves appropiately</h2>
        <h3>team is composed of mainly 3 persons and their friends, and possibly contributors from many sources</h3>
        <h5 id="something1">the cards are clickables and the descriptions are written from our own perspectives btw</h5>
        <div class="small-spacing"></div>
        <div id="members">
          <div class="person" id="julibros" onclick="window.location.href='https://www.youtube.com/@Julibros'">
            <img src="${julibrosPfp}" alt="n4c" class="pfp"/>
            <p></p>
            <span class="member-name">Julibros</span>
            <p></p>
            <span class="member-roles">sprites, music and some animations</span>
            <p></p>
            <span class="member-desc">
              lazy guy doesnt wanna do his desc
            </span>
          </div>
          <div class="person" id="n4c" onclick="window.location.href='https://www.youtube.com/@n4c-n'">
            <img src="${n4cPfp}" alt="n4c" class="pfp"/>
            <p></p>
            <span class="member-name">n4c</span>
            <p></p>
            <span class="member-roles">lead programmer, lazy ass animator and sfx maker</span>
            <p></p>
            <span class="member-desc">
              "could say im a chill guy, very good at work but lazy, im a fat###,
              i love cats (specially milo, the one on my pfp) and i like rpgs and fighting games in general,
              i like anything that my ears like and im usually very introverted and unsociable,
              if i like you then im sticking around you as much as i can
              and i dont really like sports but i enjoy basketball,
              im a project moon enthusiast and poser (yes im admiting it i dont get whats wrong) and i like photography,
              thats pretty much it for me,
              i could add something more but i will run out of space or it will be too empty so im not trying for now
              (i did it didnt i? doesnt matter, its not like i didnt want to lol)"
            </span>
          </div>
          <div class="person" id="aaron" onclick="window.location.href='https://www.youtube.com/@Elmisterio123xd'">
            <img src="${aaronPfp}" alt="n4c" class="pfp"/>
            <p></p>
            <span class="member-name">Elmisterio123x</span>
            <p></p>
            <span class="member-roles">frontend programmer (not yet), animator, sprites</span>
            <p></p>
            <span class="member-desc">
            "im a sonic fan, i like drawing
            and i help people when i can without expecting anything in exchange,
            i like exotic[butters] animals like hedgehogs and bunnies and
            i like mental stability."
            n4c-s pov as a filler: pretty chill guy, likes pretty good things
            and is a very good friend of ours, has a lot of animals and is a sega enjoyer,
            not just sonic, has a lot of funko pops but haves a barely functional pc
            and enjoys rock, this guy also owns a ukulele (knows how to play it very good),
            pretty cool guy but kinda dumb sometimes, but does lots of cool things,
            we tryna get him to be a composer and producer but doesnt want too
            because he doesnt know how to supposedly lol
            </span>
            </div>
        </div>
        <div id="pequeñoagradecimientojeje">
          <h6>gracias jean por revisar esta cosa fea <3</h6>
        </div>
      </div>
    </div>
`;

export default {
  br, at, iv, pt, ca
}