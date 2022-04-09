import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import IMGX from '../../assets/img/login_genomax.png'
import {useAuth} from '../../context/authContext'
import { FaChevronLeft } from "react-icons/fa";




const Register = (props) => {

  const [user,setUser] = useState({
    email: '',
    password: '',
  });

  const {signup} = useAuth()
  const navigate = useNavigate()
  const regexp = RegExp(/^([A-Za-z0-9]+){8,15}$/);
  const Password = regexp.test(user.password);

  const [erro,seterro]= useState(false)

  const publiError = ()=>{
    seterro(!erro)
   
  }

  const handleChange = ({target:{name, value}}) =>{
    setUser({...user,[name]: value});
  }; 
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Password){
      try {
        await signup(user.email, user.password);
        navigate('/wizardReneweb')
      }catch (error) {
         console.log('Este correo ya esta en Uso');
         publiError(error)
      }
    }else{
      window.alert("Clave Minima de 8 a 15 Caracteres")
    }
  }

  

 /* function validarFormulario(e) {
    e.preventDefault();
    var elemento = document.forms['miForm']['micheckbox'].checked;
    // eslint-disable-next-line eqeqeq
    if(elemento == true) {
      console.log('Aceptastes nuestros terminos y condiciones'); 
      return false;
    }
    else{
      window.alert("Debes aceptar nuestros terminos y condiciones");
      return false;
    }
  }

*/
    return (
      <div className=' w-full my-4 md:mt-4 md:w-3/5 h-full flex flex-col justify-center items-center'>
      <div className=' relative -top-9 md:-top-10'>
        <img src={IMGX} alt="img_genomax"  className='w-24'/>
        </div>
        <div className='w-72 m-2 -mt-5 md:w-80'>
          <h1 className='w-full font-bold text-xl text-gray-600'>Registrarme</h1>
          <hr className='border-solid  border-2 border-gray-600 mt-2 w-8'></hr>
        </div>
        <form name='miForm' onSubmit={handleSubmit} className='w-full grid place-content-center'>
          <div className='flex flex-col mb-4 '>
            <label htmlFor="email" className='font-semibold pb-2'>Usuario</label>
            <input 
              type="email"  
              name="email"
              onChange={handleChange}  
              placeholder="Ingrese su Email" 
              className='w-72 md:w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
            />
            <span className='text-red-600 text-sm ml-5 w-5/6  '>{erro ? 'El correo ya esta Registrado en Genomax' :''}</span>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="password" className='font-semibold pb-2'>Contraseña</label>
            <input 
              type="password"
              name="password"
              onChange={handleChange} 
              id="password" 
              placeholder="Ingrese su Contraseña" 
              className='w-72 md:w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
            />
          </div>
          <div className='w-72 md:w-80 mb-4'>
              <input type="checkbox" name="micheckbox" id="miId" value="second_checkbox"/> <label htmlFor="" className='text-sm'>Has clic en registrarme y acepta nuestros</label> <label for="cbox2"><Link to="http://" className='text-blue-700 text-sm'> Términos y condiciones</Link></label>
          </div>
          <button className="w-72 md:w-80 h-10 bg-green-400 text-white hover:bg-green-500  rounded mb-4">Registrarme</button>
        </form>
        <div className="grid grid-cols-1 ">
          <button onClick={props.estado} className="text-center flex items-center "><FaChevronLeft className="pr-2"/>Iniciar Sesion</button>
        </div>
      </div>
    )
}

export default Register
