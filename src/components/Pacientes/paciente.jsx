const paciente = () => {
  return (
    <>
      <div className="mb-3 mx-2 bg-white shadow-md px-5 py-5 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""} <span className="normal-case font-normal">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="normal-case font-normal">Andres</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="normal-case font-normal">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="normal-case font-normal">6 Febrero de 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {""}
          <span className="normal-case font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi eum
            saepe. Possimus officia exercitationem voluptatem saepe quod ipsam
            recusandae ullam voluptatum tempore amet modi temporibus, quae
            facere optio? Dicta!
          </span>
        </p>
      </div>
    </>
  );
};

export default paciente;
