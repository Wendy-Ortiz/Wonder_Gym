import React from 'react'; 
import jwtDecode from "jwt-decode";  
import { useDispatch } from "react-redux";
import { useNavigate  } from 'react-router-dom'  
import Header from '../../components/Header'
import List from '../../components/List'
import SecondHeader from '../../components/SecondHeader'
import { logout } from "../../Slices/user/userSlice";

export default function SelectExercises() {
    var searchFlag = false;
    const dispatch = useDispatch();
    const navigate = useNavigate ();
    const token = localStorage.getItem('token');
    const decryptedToken = jwtDecode(token);
    const name = (decryptedToken.userName);

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
            tag: 'Rutina Lunes',
            route: '/mainTrainer/{name[0]}/rutinaLunes',
            icon: "",
        },
        {
            id: 2,
            tag: 'Rutina Martes',
            route: '/mainTrainer/{name[0]}/rutinaLunes',
            icon: "",
        },
        {
            id: 3,
            tag: 'Rutina Miércoles',
            route: '/mainTrainer/{name[0]}/rutinaLunes',
            icon: "",
        },
        {
            id: 4,
            tag: 'Rutina Jueves',
            route: '/mainTrainer/{name[0]}/rutinaLunes',
            icon: "",
        },
        {
            id: 5,
            tag: 'Rutina Viernes',
            route: '/mainTrainer/{name[0]}/rutinaLunes',
            icon: "",
        },
        {
            id: 6,
            tag: 'Rutina Sábado',
            route: '/mainTrainer/{name[0]}/rutinaLunes',
            icon: "",
        },
    ]
    const headerMenu = [
        
        {
            title:  name[0],
            subTittle:'',
            searchFlag
        }
    ]

    return (
    <>
        
        <div className='m-0'>
          <Header bg_gray={true} logo_src='/logo84-64.png' values={MenuValues}/>
        </div>
        <hr className='bg-main-gold h-1'/>
        <div className={`m-0 h-screen bg-main-gray w-full`}>
            <div className='m-0'>
            <SecondHeader options={headerMenu}/>
        </div>
        <div className="items-center bg-main-gray w-full font-montserrat">
            <p className="items-center text-white font-bold text-lg pl-16 pt-4" > Datos:</p>
            <div>
                <div>
                    <img src = "/icons/news_icon.svg" alt="News Icon"/>
                </div>
                <div>
                    <img src = "/icons/news_icon.svg" alt="News Icon"/>,
                </div>
            </div>
            <p className="items-center text-white font-bold text-lg pl-16 pt-4">Contraindicaciones:</p>
            <div>
                <p className="items-center text-white font-extralight text-base pl-16"> {/contraindications[0]/} No tiene contraaindicaciones </p>
            </div>
        </div>
        <div>
            <div className="flex items-center px-8 md:px-12 lg:px-24 pb-8 pt-8 md:pb-10 md:pt-10 lg:pb-12 lg:pt-12 bg-white font-bold text-secundary-blue border-b">
                <h1 className="flex items-center px-8 md:px-12 lg:px-24 text-4xl md:text-5x1 lg:text-6xl" id="username">RUTINAS</h1>
                <img  className="flex items-center" src = "/icons/routine2_icon_blue.svg" alt="New Routine Icon"/>
            </div>
            <List options={options}/>
            </div>
        </div>
    </>
    );
  }