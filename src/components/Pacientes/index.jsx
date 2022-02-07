import "./styles.scss";
import Paciente from "./paciente";

const ListadoPacientes = () => {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5">
        <h2 className="font-black text-3xl text-center mb-1">Listado Pacientes</h2>
        <p className="text-xl text-center mb-5 ">
          Administra tus {""}
          <span className="text-indigo-600 font-bold"> Pacientes</span>
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
          <Paciente />
          <Paciente />
          <Paciente />
        </div>
      </div>
    </>
  );
};

export default ListadoPacientes;
