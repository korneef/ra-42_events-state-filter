export default function projectList(props) {
  return (
    <div className="projects">
      <ul className="projects__list">
        {props.projects.map((item, index) => <li key={`item${index}`} className="projects__item"><img src={item.img} alt={`category: ${item.category}`}/></li>)}
      </ul>
    </div>
  )
}
