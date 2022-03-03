const paciente = ({ patient, setEditPatient, deletePatient }) => {
  return (
    <>
      <div className="mb-3 mx-5 bg-white shadow-md px-5 py-5 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre:
          <span className="normal-case font-normal"> {patient?.pet}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario:
          <span className="normal-case font-normal"> {patient?.owner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Numero:
          <span className="normal-case font-normal"> {patient?.phone}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:
          <span className="normal-case font-normal"> {patient?.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha De Alta:
          <span className="normal-case font-normal"> {patient?.date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas:
          <span className="normal-case font-normal"> {patient?.symptom}</span>
        </p>
        <div className="flex items-center justify-between mt-5">
          <button
            type="button"
            onClick={() => setEditPatient(patient)}
            className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-all"
          >
            editar
          </button>
          <button
            type="button"
            onClick={() => deletePatient(patient?.id)}
            className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-all"
          >
            eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default paciente;
