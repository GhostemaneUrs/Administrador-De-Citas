import Header from "../components/Header";
import Formulario from "../components/Formulario";
import Pacientes from "../components/Pacientes/index";
import { useState, useEffect } from "react";

const App = () => {
  const [patients, setPatients] = useState([]);
  const [editPatient, setEditPatient] = useState({});

  useEffect(() => {
    const local = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(pacientesLS);
    };
    local();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <>
      <div className="container mx-auto mt-5">
        <Header />
        <div className="mt-10 md:flex justify-center">
          <Formulario
            patients={patients}
            setPatients={setPatients}
            editPatient={editPatient}
            setEditPatient={setEditPatient}
          />
          <Pacientes
            patients={patients}
            setPatients={setPatients}
            setEditPatient={setEditPatient}
          />
        </div>
      </div>
    </>
  );
};

export default App;
