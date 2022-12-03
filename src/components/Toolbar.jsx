export default function Toolbar({ filters, selected, onSelectFilter }) {
  const buttons = []
  filters.forEach((element, index) => {
    let className = 'toolbar__button';
    if (element === selected) {
      className += ' toolbar__button_active';
    }
    buttons.push(<button key={index} className={className} type='button' onClick={() => onSelectFilter(element)}>{element}</button>)
  });
  return (
    <div className="toolbar">
      {buttons}
    </div>
  )
}
