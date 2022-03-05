import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
const Formulario = ({ patients, setPatients, editPatient, setEditPatient }) => {
  const uniqueId = uuidv4();
  const [patient, setPatient] = useState({
    id: "",
    pet: "",
    owner: "",
    phone: "",
    email: "",
    date: "",
    symptom: "",
  });

  useEffect(() => {
    if (editPatient.id) {
      setPatient(editPatient);
    }
  }, [editPatient]);

  const resetForm = () => {
    setPatient({
      pet: "",
      owner: "",
      phone: "",
      email: "",
      date: "",
      symptom: "",
    }); // Reset form
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Validate form */
    if (
      patient.pet === "" ||
      patient.owner === "" ||
      patient.phone === "" ||
      patient.email === "" ||
      patient.date === "" ||
      patient.symptom === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        confirmButtonText: "Ok",
        text: "All fields are required!",
      });
    }
    if (editPatient.id) {
      resetForm();
      Swal.fire({
        icon: "success",
        timer: 1500,
        text: "Patient edited successfully!",
      });
      patient.id = editPatient.id;
      const updatePatient = patients.map((updatePatient) =>
        updatePatient.id === patient.id ? patient : updatePatient
      );
      setPatients(updatePatient);
      setEditPatient({});
    } else {
      resetForm();
      Swal.fire({
        icon: "success",
        timer: 1500,
        text: "Patient added successfully!",
      });
      patient.id = uniqueId;
      setPatients([...patients, patient]);
    }
  };

  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 xl:w-2/5 mx-5 mb-5">
        <h1 className="font-black text-center text-3xl mb-1">
          Seguimiento Pacientes
        </h1>
        <p className="text-lg text-center mb-5">
          Añade Pacientes y {""}
          <span className="text-indigo-600 font-bold">Administrarlos</span>
        </p>

        <form
          className="bg-white shadow-md rounded-xl py-10 px-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label
              htmlFor="mascota"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre Mascota
            </label>
            <input
              id="mascota"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
              placeholder="Nombre Mascota"
              value={patient.pet}
              onChange={(e) => setPatient({ ...patient, pet: e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre Propietario
            </label>
            <input
              id="propietario"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
              placeholder="Nombre del Propietario"
              value={patient.owner}
              onChange={(e) =>
                setPatient({ ...patient, owner: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block text-gray-700 uppercase font-bold"
            >
              Numero de Teléfono
            </label>
            <input
              id="´phone"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
              placeholder="Numero de Teléfono"
              value={patient.phone}
              onChange={(e) =>
                setPatient({ ...patient, phone: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 uppercase font-bold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
              placeholder="Email Contacto Propietario"
              value={patient.email}
              onChange={(e) =>
                setPatient({ ...patient, email: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="alta"
              className="block text-gray-700 uppercase font-bold"
            >
              Alta
            </label>
            <input
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
              value={patient.date}
              onChange={(e) => setPatient({ ...patient, date: e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="síntomas"
              className="block text-gray-700 uppercase font-bold"
            >
              Síntomas
            </label>
            <textarea
              id="síntomas"
              placeholder="Describe los síntomas"
              className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
              value={patient.symptom}
              onChange={(e) =>
                setPatient({ ...patient, symptom: e.target.value })
              }
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value={editPatient.id ? "Editar Paciente" : "Añadir Paciente"}
          />
        </form>
      </div>
    </>
  );
};

export default Formulario;
