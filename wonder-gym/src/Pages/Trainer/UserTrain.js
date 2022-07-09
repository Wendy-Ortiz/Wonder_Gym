import React from 'react';   
import { useDispatch } from "react-redux";
import Header from '../../components/Header'
import SecondHeader from '../../components/SecondHeader'

export default function SelectExercises() {
    var searchFlag = false;
    const dispatch = useDispatch();

    const MenuValues = [
    {
        id: 1,
        tag: 'Mi perfil',
        route: '/mainTrainer/trainerProfile'
    },
    {
        id: 2,
        tag: 'Configuraciones',
        route: '/mainTrainer/settings'
    },
    {
        id: 3,
        tag: 'Cerrar Sesión',
        route: '/mainTrainer/logOut'
    },
    ]

    const options = [
        {
            id: 2,
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
            tag: 'Rutina Miercoles',
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
            <div className="bg-white w-full font-bebasNeue">
                <br></br>
                <h1 className="flex items-center px-8 md:px-12 lg:px-24 text-4xl md:text-5x1 lg:text-6xl" id="username">RUTINAS</h1>
                <br></br>

            </div>
            <List options={options}/>
            </div>
        </div>
    </>
    );
  }