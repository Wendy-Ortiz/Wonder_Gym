import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import Header from '../../components/Header'
import LoginModal from '../../components/LoginModal';

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
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false)
  const navigate = useNavigate ();
  const [Values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(Values))
  }

  return (
    <>
      <div className='divide-y-2 divide-main-gray'>
        <div className='m-0'>
          <Header bg_gray={false} logo_src='/logo84-64_v2.png' values={MenuValues}/>
        </div>
      <div className={`m-0 flex h-screen bg-white w-full sm:px-8 md:px-12 lg:px-24`}>
        <form className='px-8'>
          <h1 className={`font-bebasNeue pt-16 pb-10 text-5xl lg:text-6xl`}> Crea tu Cuenta </h1>
          {Input_Values.map((input) => (
            <RegisterInput
                key={input.id}
                {...input}
                onChange={onChange}
            />
          ))}
          <div className='m-8 flex items-center justify-center'>
          <button className="text-white font-bold bg-main-blue m-6 rounded-lg h-12 w-48 lg:w-56" onClick={handleSubmit}> Registrarme </button>
          </div>
        </form>
      </div>
    </div>
    <LoginModal isOpenLoginModal={isOpenLoginModal} setIsOpenLoginModal={setIsOpenLoginModal} />
    </>
    
  );
}
  