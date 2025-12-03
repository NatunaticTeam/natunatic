type ProjectsComponentProps = {
  reference: string,
  content: string
}

function ProjectsComponent(props: ProjectsComponentProps) {
  const goto = 'projects?game=' + props.reference
  return (
  <>
    <li><a href={goto} className="pjlist-element">{props.content}</a></li>
  </>
  )
}

export default ProjectsComponent;