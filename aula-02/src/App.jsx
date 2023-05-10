function App() {
  function handleCheck() {
    alert("ok");
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <input placeholder="Digite um valor" />
      <button onClick={handleCheck}>verificar</button>
    </div>
  );
}

export default App;

