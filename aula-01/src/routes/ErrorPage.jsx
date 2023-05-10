import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


function ErrorPage() {
  const[time, setTime] = useState(3)
  const timeout = useRef(0)
  const navigate = useNavigate();

  useEffect(() =>{
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t-1)
    }, 1000);

    if(time <= 0){
      navigate('/')
    }

    return () => { clearTimeout(time.current)}
  },[time]);

return (
  <div className="container">

    <h2>Erro 404</h2>
    <h3>A página que você tentou acessar não existe!</h3>
    <h3>Você será redirecionado em: {time}</h3>

  </div>
  )
}

export default ErrorPage