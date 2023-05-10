import "./styles.scss";
import { Link } from "react-router-dom"

function HeaderComp() {
  return <Link to="/"> <div className="header">Shop Products</div></Link>
}

export default HeaderComp;
