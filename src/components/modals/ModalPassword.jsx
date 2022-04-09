import React from "react";

const ModalPassword = (props) => {
  return (
    <div
      className={`bg-gradient-to-r from-lime-700 w-full ${
        props.active ? "" : "hidden"
      } h-full grid place-items-center absolute z-10`}
    >
      <div className=" w-2/5 h-3/5 flex  flex-col justify-center  bg-white border-black rounded-xl text-center relative bottom-20">
        <div className=" mb-5 w-full flex justify-center items-center ">
          <h3 className="text-xl">¿No puedes iniciar sesión?</h3>
        </div>
        <div className=" w-full mb-5 flex flex-col justify-center items-center rounded ">
          <label htmlFor="newPassword" className="flex flex-col items-start">
            <span className="text-sm text-gray-400">
              Enviaremos un enlace de recuperación a
            </span>
            <input
              type="email"
              name="newpasswordcorrea"
              id=""
              placeholder="Introducir tu correo "
              className=" ring-2 ring-lime-500 w-72 h-10 pl-2  text-gray-500 rounded"
            />
          </label>
        </div>
        <div className=" w-full flex flex-col justify-center items-center gap-10">
          <button
            type="button"
            onClick={() => props.setActive(!props.active)}
            className="rounded-md  w-72 h-10  bg-lime-600 text-white hover:bg-lime-700"
          >
            Enviar enlace de recuperacion
          </button>

          <button
            type="button"
            onClick={() => props.setActive(!props.active)}
            className="  hover:underline w-72 h-10 text-lime-600   "
          >
            Volver a Inicio de sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPassword;
