import Cards from "./components/cards";
import LeftSide from "./components/leftside";
import './styles.scss'

export default function App() {
  return (
    <div className="main-container">
      <LeftSide />
      <Cards />
    </div>
  );
}
