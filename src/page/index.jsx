import Header from "../components/Header";
import Formulario from "../components/Formulario";
import Pacientes from "../components/Pacientes/index";

const App = () => {
  return (
    <>
      <div className="container mx-auto mt-5">
        <Header />
        <div className="mt-10 md:flex justify-center">
          <Formulario />
          <Pacientes />
        </div>
      </div>
    </>
  );
};

export default App;
