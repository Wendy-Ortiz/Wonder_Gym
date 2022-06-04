import { useState } from 'react'

import Header from '../../components/Header'
import Button from '../../components/Button'

const RegisterInput = (props) => {
  const {label, onChange, ...inputProps} = props
  return(
    <div className='pt-4'>
        <label> {label} </label>
        <div className='pt-2'>
            <input className='pl-2 pr-2 border border-gray-800 rounded-lg h-10' {...inputProps} onChange={onChange}/>
        </div>
    </div>
  );
};

export default function Register() {

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
        label: "Nombre  *",
        required: true,
    },
    {
        id: 2,
        name: "email",
        type: "text",
        label: "Email: *",
        required: true,
    },
    {
        id: 3,
        name: "password",
        type: "password",
        label: "Contraseña: *",
        required: true,
    },
    {
      id: 4,
      name: "confirm_password",
      type: "password",
      label: "Confirmar Contraseña: *",
      required: true,
    },
    ];

  const MenuValues = [
    {
      id: 5,
      tag: 'Menu Principal',
      route: '/'
    },
    {
      id: 6,
      tag: 'Iniciar Sesión',
      route: '/login'
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
      <div className='m-0'>
        <Header bg_gray={false} logo_src='/logo84-64_v2.png' values={MenuValues}/>
      </div>
      <hr className='bg-main-gray h-0.5'/>
      <div className={`ml-4 mr-4 flex flex-col h-screen bg-white sm:px-8 md:px-12 lg:px-24`}>
        <form onSubmit={handleSubmit}>
          <h1> Crea tu Cuenta </h1>
          {Input_Values.map((input) => (
            <RegisterInput
                key={input.id}
                {...input}
                onChange={onChange}
            />
          ))}
          <div className='m-8 flex items-center justify-center'>
            <Button w='w-36' h='h-10' type="submit" ButtonText='Registrarme'/>
          </div>
        </form>
      </div>
    </>
    
  );
}
  