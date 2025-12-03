import _julibrosPfp from '../assets/julibros.jpg'
import _n4cPfp from '../assets/n4c.jpg'
import _aaronPfp from '../assets/aaron.jpg'
import _julibrosDescEN from '../assets/descriptions/julibros-en.txt'
import '../styles/team.css'
import { MemberCard, SpecialThanksCard } from '../components'

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
          <MemberCard pfpUrl={_julibrosPfp} id='julibros' yt='@Julibros' name='Julibros' roles='sprites, music and some animations' descUrl={_julibrosDescEN}/>
          <MemberCard pfpUrl={_n4cPfp} id='n4c' yt='@sirBatterson' name='n4c' roles='lead programmer, lazy ass animator and sfx maker' descUrl=''/>
          <MemberCard pfpUrl={_aaronPfp} id='aaron' yt='@Elmisterio123xd' name='Elmisterio123x' roles='frontend programmer (not yet), animator, sprites' descUrl=''/>
        </div>
        <div id="special-thanks">
          <h3>special thanks to people that didnt necessarily collaborate or something, but we appreciate:</h3>
          <div id="special-thanks-persons">
            <SpecialThanksCard name='jean' l1='jeany beany' l2='cool' l3='liked the page' l4='much love' l5='✌️ -n4c'/>
            {/* this ones dedicated to the person i care the most for -n4c */}
            <SpecialThanksCard name='isa' l1='uhm' l2='i dont really know' l3='what to say about' l4='this one' l5='i love you -n4c' id='isas-frame'/>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default PageIndex;