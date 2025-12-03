type MemberCardProps = {
  id: string,
  pfpUrl: string,
  yt: string,
  name: string,
  descUrl: string,
  roles: string
}

type SpecialThanksCardProps = {
  name: string,
  id?: string,
  l1: string,
  l2: string,
  l3: string,
  l4: string,
  l5: string;
}

export function MemberCard(props: MemberCardProps)
{
  return (
  <>
    <div className="person" id={props.id} onClick={() => window.location.href='https://www.youtube.com/'+props.yt}>
      <img src={props.pfpUrl} alt={props.id} className="pfp"/>
      <p></p>
      <span className="member-name">{props.name}</span>
      <p></p>
      <span className="member-roles">{props.roles}</span>
      <p></p>
      <span className="member-desc"></span>
    </div>
  </>
  )
}

export function SpecialThanksCard(props: SpecialThanksCardProps)
{
  if (props.id != null)
  {
    return (
      <>
        <div id={props.id} className="small-person">
          <span className="member-name">{props.name}</span>
          <p></p>
          <span className="member-desc">
            {props.l1}
            <div></div>
            {props.l2}
            <div></div>
            {props.l3}
            <div></div>
            {props.l4}
            <div></div>
            {props.l5}
          </span>
        </div>
      </>
    )
  }
  else
  {
    return (
      <>
        <div className="small-person">
          <span className="member-name">{props.name}</span>
          <p></p>
          <span className="member-desc">
            {props.l1}
            <div></div>
            {props.l2}
            <div></div>
            {props.l3}
            <div></div>
            {props.l4}
            <div></div>
            {props.l5}
          </span>
        </div>
      </>
    )
  }
}
