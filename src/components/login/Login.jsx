import React from 'react'
import {useNavigate} from 'react-router-dom'
import IMGX from '../../assets/img/login_genomax.png'
import {useAuth} from '../../context/authContext'
import { FaChevronRight} from "react-icons/fa";







const Login = (props) => {
    
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value

    try {
      await login(email, password);
       navigate('/')
       console.log(email, password)
     } catch  (error) {
       window.alert(error)
     }
  }

    return (
      <div className=' w-full my-4 md:m-1 md:w-3/5 h-full flex flex-col justify-center items-center'>
          <div className=' relative -top-9 md:-top-10'>
            <img src={IMGX} alt="img_genomax"  className='w-24'/>
          </div>
          <div className='w-72 m-2 -mt-5 md:w-80'>
            <h1 className='w-full font-bold text-xl text-gray-600'>Iniciar sesión</h1>
            <hr className='border-solid  border-2 border-gray-600 mt-2 w-8'></hr>
          </div>
          <form onSubmit={handleSubmit} className=' w-full grid place-content-center'>
            <div className='flex flex-col mb-4 '>
              <label htmlFor="email" className='font-semibold pb-2'>Usuario</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="Ingrese su Email" 
                className='w-72 md:w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="password" className='font-semibold pb-2'>Contraseña</label>
              <input 
                type="password" 
                name="Password" 
                id="password" 
                placeholder="Ingrese su Contraseña"  
                className='w-72 md:w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
              />
            </div>
            <button className="w-72 md:w-80 h-10 bg-green-400 text-white hover:bg-green-500 rounded mb-4">Iniciar Sesion</button>
          </form>
          <div className=" w-full lg:flex md:justify-evenly md:divide-x">
              <button onClick={props.estado}  className=" w-full lg:w-6/12 md:text-center flex justify-center items-center lg:pl-40"><FaChevronRight className=" -pr-2"/>Registrarse</button>
              <button onClick={props.handleActive} className=" w-full lg:w-6/12 md:text-center md:flex md:justify-center md:pl-0 xl:justify-start xl:pl-5 ">¿No puedes Iniciar?</button>
          </div>
      </div>   
    )
}

export default Login


