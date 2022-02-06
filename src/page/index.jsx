import Header from "../components/Header";
import Formulario from "../components/Formulario";
import Pacientes from "../components/Pacientes";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Formulario />
        <Pacientes />
      </div>
    </>
  );
};

export default App;
