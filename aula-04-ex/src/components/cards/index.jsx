import "./styles.scss";

export default function Cards(props) {
  return (
    <div className="wrapper">
        <div className="title"><h2>Minhas Tarefas</h2> <h4>total de tarefas: x</h4></div>
      
      <div className="cards">
        <div className="cards-info">
          <h3 className="task-title">{props.title}</h3>
          <span>{props.category}</span>
          <p>{props.description}</p>
        </div>
        <div className="actions">
            <span className="task-date">xx/xx/xx</span>
            <ul className="icons">
                <li className="edit-icon">X</li>
                <li className="exclude-icon">Y</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
