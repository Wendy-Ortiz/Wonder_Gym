import React from 'react';
//import { useState /*, useEffect */} from 'react'
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
    //const [setIsOpenLoginModal] = useState(false);
    
    //const [user,setOptions] = useState(null);
    const navigate = useNavigate ();
    const dispatch = useDispatch();

    /*useEffect(()=> {
        const fetchUser = async () => {
            const userFetch = await fetch (); /*API */
            /*const userJSON = await userFetch.json();
            setOptions(userJSON);
        }
        fetchUser();

    }, []);
    */

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
            icon: <svg className="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
        },
        {
            id: 2,
            tag: 'Nueva Rutina',
            route: '/mainTrainer/newRoutine',
            icon: <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
        
        },
        {
            id: 3,
            tag: 'Entrenar',
            route: '/mainTrainer/toTrain',
            icon: <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
        },
        {
            id: 4,
            tag: 'Noticias',
            route: '/mainTrainer/news',
            icon: <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg>
        },
    ]

    return (
        <>
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
            <div className={`m-0 h-screen bg-main-gray w-full`}>
                <div className='m-0'>
                <List options={options}/>
                </div>
            </div>
        </>
    );
  }