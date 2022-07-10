import React from 'react';
import { useNavigate  } from 'react-router-dom'   
import Header from '../../components/Header'
import List from '../../components/List'
import { useDispatch } from "react-redux";
import { logout } from "../../Slices/user/userSlice";
import jwtDecode from "jwt-decode";

export default function MainTrainer() {
    const token = localStorage.getItem('token');
    const decryptedToken = jwtDecode(token);
    const name = (decryptedToken.userName).split(" ");
    const navigate = useNavigate ();
    const dispatch = useDispatch();

  

    const MenuValues = [
        {
            id: 1,
            tag: 'Mi perfil',
            handleClick: () => navigate(`/mainTrainer/profile`),
        },
        {
            id: 2,
            tag: 'Configuraciones',
            handleClick: () => navigate(`/mainTrainer/config`),
        },
        {
            id: 3,
            tag: 'Cerrar Sesión',
            handleClick: () => dispatch(logout()),
        },
    ]

    const options = [
        {
            id: 1,
            tag: 'Usuarios',
            route: '/mainTrainer/trainerUsers',
            icon: <img src = "/icons/users_icon_white.svg" alt="Users Icon"/>,
        },
        {
            id: 2,
            tag: 'Nueva Rutina',
            route: '/mainTrainer/newRoutine',
            icon: <img src = "/icons/routine_icon.svg" alt="New Routine Icon"/>,
        
        },
        {
            id: 3,
            tag: 'Entrenar',
            route: '/mainTrainer/toTrain',
            icon: <img src = "/icons/weightlifting_icon.svg" alt="To Train Icon"/>,
        },
        {
            id: 4,
            tag: 'Noticias',
            route: '/mainTrainer/news',
            icon: <img src = "/icons/news_icon.svg" alt="News Icon"/>,
        },
    ]

    return (
        <div className="bg-main-gray w-full h-screen" >
            <div className='m-0'>
            <Header bg_gray={true} logo_src='/logo84-64.png' values={MenuValues}/>
            </div>
            <hr className='bg-main-gold h-1'/>
            <div className="bg-white w-full font-bebasNeue">
                <br></br>
                <h1 className="flex items-center px-8 md:px-12 lg:px-24 text-4xl md:text-5x1 lg:text-6xl" id="username"> ¡HOLA { name[0] }! </h1>
                <br></br>
                <h2 className= "flex items-center px-8 md:px-12 lg:px-24 text-secundary-blue text-xl md:text-2xl lg:text-3xl" id="trainerSubTittle">¿QUÉ DESEAS REVISAR HOY?</h2>
                <br></br>
            </div>
            <div className={`m-0`}>
                <div className='m-0'>
                <List options={options}/>
                </div>
            </div>
        </div>
    );
  }