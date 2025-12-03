import _julibrosPfp from '../assets/julibros.jpg'
import _n4cPfp from '../assets/n4c.jpg'
import _aaronPfp from '../assets/aaron.jpg'
import '../styles/team.css'

function PageIndex()
{
  return (
  <>
    <div>
      <div className="spacing"></div>
      <div className="small-spacing"></div>
      <h1>welcome to natunatic!</h1>
      <h5>page is still a very big wip but we finally decided to keep this design bc julibros really liked it</h5>
      <div className="spacing"></div>
      <div id="team">
        <div className="small-spacing"></div>
        <div className="small-spacing"></div>
        {/* team section down here */}
        <h2>of course we present ourselves appropiately</h2>
        <h3>team is composed of mainly 3 persons and their friends, and possibly contributors from many sources</h3>
        <h5 id="something1">the cards are clickables and the descriptions are written from our own perspectives btw</h5>
        <div className="small-spacing"></div>
        <div id="members">
          <div className="person" id="julibros" onClick={() => window.location.href='https://www.youtube.com/@Julibros'}>
            <img src={_julibrosPfp} alt="julibros" className="pfp"/>
            <p></p>
            <span className="member-name">Julibros</span>
            <p></p>
            <span className="member-roles">sprites, music and some animations</span>
            <p></p>
            <span className="member-desc">"basically a really creative guy that got the idea of producing games, and thanks to my friends an family that got into a dream come true, as my friends say im the "leader" so i give the ideas and general designs on the team, and make the youtube videos and stories too of course, i also make covers for fun and im trying to "learn" how to produce original tracks." n4c's pov as a filler: pretty cool but lazy guy, does his job but like 3 weeks after i requested it and is very helpful too, icl this guy can make sick beats but is way too lazy to do em, go follow the natunatic channel to show him support please, it would help us all, not just julibros.</span>
          </div>
          <div className="person" id="n4c" onClick={() => window.location.href='https://www.youtube.com/@sirBatterson'}>
            <img src={_n4cPfp} alt="n4c" className="pfp"/>
            <p></p>
            <span className="member-name">n4c</span>
            <p></p>
            <span className="member-roles">lead programmer, lazy ass animator and sfx maker</span>
            <p></p>
            <span className="member-desc">"could say im a chill guy, very good at work but lazy, im a fat###, i love cats (specially milo, the one on my pfp) and i like rpgs and fighting games in general, i like anything that my ears like and im usually very introverted and unsociable, if i like you then im sticking around you as much as i can and i dont really like sports but i enjoy basketball, im a project moon enthusiast and poser (yes im admiting it i dont get whats wrong) and i like photography, thats pretty much it for me, i could add something more but i will run out of space or it will be too empty so im not trying for now (i did it didnt i? doesnt matter, its not like i didnt want to lol)"</span>
          </div>
          <div className="person" id="aaron" onClick={() => window.location.href='https://www.youtube.com/@Elmisterio123xd'}>
            <img src={_aaronPfp} alt="aaron" className="pfp"/>
            <p></p>
            <span className="member-name">Elmisterio123x</span>
            <p></p>
            <span className="member-roles">frontend programmer (not yet), animator, sprites</span>
            <p></p>
            <span className="member-desc">"im a sonic fan, i like drawing and i help people when i can without expecting anything in exchange, i like exotic[butters] animals like hedgehogs and bunnies and i like mental stability." n4c-s pov as a filler: pretty chill guy, likes pretty good things and is a very good friend of ours, has a lot of animals and is a sega enjoyer, not just sonic, has a lot of funko pops but haves a barely functional pc and enjoys rock, this guy also owns a ukulele (knows how to play it very good), pretty cool guy but kinda dumb sometimes, but does lots of cool things, we tryna get him to be a composer and producer but doesnt want too because he doesnt know how to supposedly lol</span>
          </div>
        </div>
        <div id="special-thanks">
          <h3>special thanks to people that didnt necessarily collaborate or something, but we appreciate:</h3>
          <div id="special-thanks-persons">
            <div className="small-person">
              <span className="member-name">jean</span>
              <p></p>
              <span className="member-desc">
                jeany beany
                <div></div>
                cool<div></div> liked the page<div></div> much love
                <div></div>
                ✌️ -n4c
              </span>
            </div>
            {/* this ones dedicated to the person i care the most for */}
              <div className="small-person hidden" id="isas-frame">
                <span className="member-name">isa</span>
                <p></p>
                <span className="member-desc">
                
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default PageIndex;