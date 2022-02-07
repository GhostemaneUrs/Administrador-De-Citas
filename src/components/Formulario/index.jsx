import "./styles.scss";
const Formulario = () => {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 xl:w-2/5 mx-3">
        <h1 className="font-black text-center text-3xl mb-1">
          Seguimiento Pacientes
        </h1>
        <p className="text-lg text-center mb-5">
          Añade Pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-xl py-10 px-5">
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
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="sintomas"
              className="block text-gray-700 uppercase font-bold"
            >
              Sintomas
            </label>
            <textarea
              id="sintomas"
              placeholder="Describe los sintomas"
              className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente"
          />
        </form>
      </div>
    </>
  );
};

export default Formulario;
