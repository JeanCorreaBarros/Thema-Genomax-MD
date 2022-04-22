import React from "react";
import { FaHospital } from "react-icons/fa";

const PasoUno = (props) => {
  return (
    <div className="w-full h-96 ">
      <div className="mt-5 flex flex-col items-center pb-3">
        <h3 className="text-xl">¡Hola, 🤗 te damos la bienvenida!</h3>
        <span className="text-center">
          Elije tu Especialidad y ayudanos a brindarte
          <br /> la mejor experiencia
        </span>
      </div>
      <div className="bg-white w-full h-80 flex flex-col border items-center ">
        <button
          onClick={props.handleInputChange}
          className=" bg-lime-600 rounded w-10/12 h-16 flex items-center gap-5 hover:bg-lime-700 cursor-pointer mt-5"
          name="especialidad"
          value="medicina general"
        >
          <span className="pl-5 text-white">
            <FaHospital />
          </span>
          <h3 className="text-white">Medicina General</h3>
        </button>
        <button
          onClick={props.handleInputChange}
          className=" bg-lime-600 rounded w-10/12 h-16 flex items-center gap-5 hover:bg-lime-700 cursor-pointer mt-3"
          name="especialidad"
          value="Pediatria"
        >
          <span className="pl-5 text-white">
            <FaHospital />
          </span>
          <h3 className="text-white">Pediatria</h3>
        </button>
        <button
          onClick={props.handleInputChange}
          className=" bg-lime-600 rounded w-10/12 h-16 flex items-center gap-5 hover:bg-lime-700 cursor-pointer mt-3"
          name="especialidad"
          value="Odontologia"
        >
          <span className="pl-5 text-white">
            <FaHospital />
          </span>
          <h3 className="text-white">Odontologia</h3>
        </button>
        <input
          type="text"
          multiple
          name="especialidades"
          id="especialidades"
          list="drawfespecialidades"
          required
          size="64"
          placeholder="Otros"
          className="w-10/12 h-11 mt-3 ring-2 ring-lime-500 h-10 pl-2 rounded"
        />

        <datalist id="drawfespecialidades">
          <option value="Psicologia"></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </datalist>
      </div>

      <div className="w-full h-16 flex justify-end items-center ">
        <button
          onClick={props.siguientePaso}
          name="paso"
          className="mr-5 w-40 h-10 bg-lime-600 text-white hover:bg-lime-700 rounded"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default PasoUno;