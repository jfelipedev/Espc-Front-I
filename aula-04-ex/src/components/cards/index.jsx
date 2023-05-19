import "./styles.scss";

export default function Cards({ title, category, description, date }) {
  return (
      <div className="cards">
        <div className="cards-info">
          <h3 className="task-title">{title}</h3>
          <span>{category}</span>
          <p>{description}</p>
        </div>
        <div className="actions">
            <span className="task-date">{date}</span>
            <ul className="icons">
                <li className="edit-icon">X</li>
                <li className="exclude-icon">Y</li>
            </ul>
        </div>
      </div>

  );
}
