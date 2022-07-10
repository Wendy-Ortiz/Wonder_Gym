import { useState } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { useNavigate  } from 'react-router-dom'
import Header from '../../components/Header'
import LoginModal from '../../components/LoginModal';
import { createUser } from "../../Slices/user/requests/createUsers";

const RegisterInput = (props) => {
  const {label, onChange, ...inputProps} = props
  return(
    <div className='py-2 font-montserrat'>
        <label > {label} </label>
        <input className=' px-4 border border-gray-800 rounded-md h-9 w-full' {...inputProps} onChange={onChange}/>
    </div>
  );  
};

export default function Register() {
  const userSuccessfullyRegistered = useSelector((state) => state.user.userSuccessfullyRegistered);
  const RegisterError = useSelector((state) => state.user.errorMessage);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [Values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate ();

  const Input_Values = [
    {
        id: 1,
        name: "name",
        type: "text",
        label: "Nombre",
        required: true,
    },
    {
        id: 2,
        name: "email",
        type: "email",
        label: "Email",
        required: true,
    },
    {
        id: 3,
        name: "password",
        type: "password",
        label: "Contraseña",
        required: true,
    },
    {
      id: 4,
      name: "confirm_password",
      type: "password",
      label: "Confirmar Contraseña",
      required: true,
    },
    ];

  const MenuValues = [
    {
      id: 5,
      tag: 'Página Principal',
      handleClick: () => navigate(`/`),
    },
    {
      id: 6,
      tag: 'Iniciar Sesión',
      handleClick: () => setIsOpenLoginModal(true),
    },
  ]

  const onChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
  };

  const validateName = (name) => { return (name).length > 2; }

  const validateEmail = (email) => {
    return String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  const validatePassword = (password) => {
    const IsValid = String(password).match( /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ );
    return IsValid && (password === Values.confirm_password);
  }

  const validateData = () => {
    const nameIsValid = validateName(Values.name);
    const emailIsValid = validateEmail(Values.email);
    const passwordIsValid = validatePassword(Values.password);

    nameIsValid ? setValidName(true) : setValidName(false);
    emailIsValid ? setValidEmail(true) : setValidEmail(false);
    passwordIsValid ? setValidPassword(true) : setValidPassword(false);

    return nameIsValid && emailIsValid && passwordIsValid;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validData = validateData();
    if (validData) {
        const name = Values.name;
        const email = Values.email;
        const password = Values.password;
        dispatch(
            createUser({
                name,
                email,
                password
            })
        );
    }
  }


  return userSuccessfullyRegistered ? (
    <div className="bg-main-gray w-full h-screen ">
      <div className='text-center text-white font-bebasNeue pt-32 px-8'>
        <h1 className=" text-5xl md:text-6xl lg:text-7xl text-main-gold"> ¡Registro Completado!</h1>
        <h2 className='p-4 text-2xl md:text-3xl lg:text-4xl'> Ahora sos parte de Wonder Gym Por favor ingresa con tus credenciales</h2>
        <button className="text-white bg-main-blue m-6 rounded-lg h-12 w-48 lg:w-56 text-base md:text-xl lg:text-2xl" onClick={()=>  {setIsOpenLoginModal(true)}}> Login </button>
      </div>
      <LoginModal isOpenLoginModal={isOpenLoginModal} setIsOpenLoginModal={setIsOpenLoginModal} />
    </div>
  ) : (
    <>
      <div className='divide-y-2 divide-main-gray'>
        <div className='m-0'>
          <Header bg_gray={false} logo_src='/logo84-64_v2.png' values={MenuValues}/>
        </div>
      <div className={`m-0 flex bg-white w-full sm:px-8 md:px-12 lg:px-24`}>
        <form className='px-8'>
          <h1 className={`font-bebasNeue pt-10 pb-6 text-5xl lg:text-6xl`}> Crea tu Cuenta </h1>
          {Input_Values.map((input) => (
            <RegisterInput
                key={input.id}
                {...input}
                onChange={onChange}
            />
          ))}
          <ul className="px-8 md:px-12 lg:px-24 list-disc mt-4" >
            { !validName && <li className={`text-red-500 text-sm pb-2`}> El nombre es muy corto </li> }
            { !validEmail && <li className={`text-red-500 text-sm pb-2`}> El email ingresado no es válido </li> }
            { !validPassword && <li className={`text-red-500 text-sm pb-2`}> Contraseña debe ser alfanúmerica y contener mínimo 8 dígitos, además deben de coincidir </li> }
          </ul>
          { (RegisterError !== "") && <p className={`text-red-500 text-sm pb-2`}> Ups! Algo salió mal. Por favor vuelva a intentarlo. </p> }
          <div className='m-4 flex items-center justify-center'>
          <button className="text-white font-bold bg-main-blue m-6 rounded-lg h-12 w-48 lg:w-56" onClick={handleSubmit}> Registrarme </button>
          </div>
        </form>
      </div>
    </div>
    <LoginModal isOpenLoginModal={isOpenLoginModal} setIsOpenLoginModal={setIsOpenLoginModal} />
    </>
  );
}
  