import "./styles.scss";

// eslint-disable-next-line react/prop-types
export default function Cards({
  title,
  category,
  description,
  date,
  img1,
  img2,
}) {
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
          <button className="edit-icon no-border">{img1}</button>
          <button className="exclude-icon no-border">{img2}</button>
        </ul>
      </div>
    </div>
  );
}
