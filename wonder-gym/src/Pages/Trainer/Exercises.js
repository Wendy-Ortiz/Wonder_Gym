import React from 'react';   
import Header from '../../components/Header'
import SecondHeader from '../../components/SecondHeader'
import Accordion from '../../components/Accordion'

export default function SelectExercises() {
    var searchFlag = true;

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
        id: 1,
        tittle: 'Abdominales',
        option: 'Plancha lateral',
        route: '/',
    },
    {
        id: 2,
        tittle: 'Pecho',
        option: 'Banca plana',
        route: '/',
    },
    {
        id: 3,
        tittle: 'Brazo',
        option: 'Bicep',
        route: '/',
    },
    ]
    const headerMenu = [
        
        {
            tittle: 'Asignar a',
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
            <Accordion options={options}/>
            </div>
        </div>
    </>
    );
  }