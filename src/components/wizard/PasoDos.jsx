import React from 'react'

const PasoDos = (props) => {
  return (
    <div className="w-full h-5/6 ">
      <div className="mt-5 flex flex-col items-center pb-3">
        <h3 className="text-xl">¡Hola,te damos la bienvenida!</h3>
        <span className="text-center">Diligencia estos datos y ayudanos a brindarte <br/>la mejor experiencia</span>
      </div>
      <div className="bg-white w-full h-80  border items-center pt-5">
        <form className="flex flex-col gap-y-5 items-center">
        <div className='flex flex-col mb-4 '>
        <label htmlFor="name" className='font-semibold pb-2'>Nombres</label>
              <input 
                type="name" 
                name="name" 
                id="name"
                placeholder="Ingrese su Nombre" 
                className='w-72 md:w-80 h-10 ring-2 ring-lime-400 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-lime-500 rounded' 
              />
          </div>    
        <div className='flex flex-col mb-4 '>
        <label htmlFor="last name" className='font-semibold pb-2'>Apellidos</label>
              <input 
                type="last name" 
                name="last name" 
                id="last name"
                placeholder="Ingrese su Apellido" 
                className='w-72 md:w-80 h-10 ring-2 ring-lime-400 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-lime-500 rounded' 
              />
          </div>    
          <span className="text-base text-center mt-3">Puedes cambiar tus datos en cualquier momento <br/> desde la configuración</span>

        </form>

        
      </div>
      <div className="w-full h-16 flex justify-between items-center ">
        <button onClick={props.pasoAtras}  name="atras" className="ml-5 w-40 h-10 bg-lime-600 text-white hover:bg-lime-700 rounded">Anterior</button>
        <button onClick={props.siguientePaso}  name="siguiente" className="mr-5 w-40 h-10 bg-lime-600 text-white hover:bg-lime-700 rounded">Siguiente</button>
      </div>
  
    </div>
  )
}

export default PasoDos