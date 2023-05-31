import Form from "./components/form";
import List from "./components/list";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex flex-wrap justify-center sm:p-0">
        <Form />
        <List />
      </div>
    </>
  );
}

export default App;
