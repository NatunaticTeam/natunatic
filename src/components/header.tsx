type ProjectsComponentProps = {
  reference: string,
  content: string
}

type LanguageComponentProps = {
  lang: string,
  content: string
}

export function ProjectsComponent(props: ProjectsComponentProps) {
  const goto = 'projects?game=' + props.reference
  return (
  <>
    <li><a href={goto} className="pjlist-element">{props.content}</a></li>
  </>
  )
}

export function LanguagesComponent(props: LanguageComponentProps)
{
  return (
  <>
    <li><a className="langlist-element" id={"lang-" + props.lang}>{props.content}</a></li>
  </>
  )
}