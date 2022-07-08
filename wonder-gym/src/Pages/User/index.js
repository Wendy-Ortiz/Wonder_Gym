import React from 'react';   
import { /*useState,*/ useEffect } from 'react'
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";

import Header from '../../components/Header'
import List from '../../components/List'
import { logout } from "../../Slices/user/userSlice";

export default function MainTrainer() {
    const token = localStorage.getItem('token');
    const decryptedToken = jwtDecode(token);
    const name = (decryptedToken.userName).split(" ");

    const dispatch = useDispatch();
    
    //const [user, setUsers] = useState(null); /**For obtain the username for second header */
    
    useEffect(()=> {
        const fetchUsers = async () => {
            //const userFetch = await fetch (''); /*API */
            //const userJSON = await userFetch.json();
            //setUsers(userJSON);
        }
        fetchUsers();

    }, []);

    const MenuValues = [
        {
            id: 1,
            tag: 'Mi perfil',
            route: '/trainerProfile'
        },
        {
            id: 2,
            tag: 'Configuraciones',
            route: '/settings'
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
            tag: 'Mis rutinas',
            route: '/users/routine',
            icon: <img src = "/icons/routine2_icon.svg" alt="My Routines Icon"/>,
        },
        {
            id: 2,
            tag: 'Rutinas básicas',
            route: '/users/basicRoutine',
            icon: <img src = "/icons/routine_icon.svg" alt="Basic Routines Icon"/>,
        },
        {
            id: 3,
            tag: 'Calentamientos',
            route: '/users/warmUps',
            icon: <img src = "/icons/warmUp_icon.svg" alt="Warm Up Icon"/>,
        },
        {
            id: 4,
            tag: 'Ver noticias',
            route: 'users/news',
            icon: <img src = "/icons/news_icon.svg" alt="News Icon"/>,
        },
    ]

    return (
    <div className="bg-main-gray w-full h-screen">   
        <div className='m-0'>
          <Header bg_gray={true} logo_src='/logo84-64.png' values={MenuValues}/>
        </div>
        <hr className='bg-main-gold h-1'/>
            <div className="bg-white w-full font-bebasNeue">
                <br></br>
                <h1 className="flex items-center px-8 md:px-12 lg:px-24 text-4xl md:text-5x1 lg:text-6xl" id="clientUsername"> ¡HOLA { name[0] }! </h1>
                <br></br>
                <h2 className="flex items-center px-8 md:px-12 lg:px-24 text-secundary-blue text-xl md:text-2xl lg:text-3xl" id="userSubTittle">¿QUÉ DESEAS HACER HOY?</h2>
                <br></br>
        </div>
        <div className={`m-0 bg-main-gray w-full`}>
            <div className='m-0'>
            <List options={options}/>
            </div>
        </div>
    </div>
    );
  }