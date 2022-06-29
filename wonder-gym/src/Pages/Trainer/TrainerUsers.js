import React from 'react';   
import Header from '../../components/Header'
import List from '../../components/List'
import SecondHeader from '../../components/SecondHeader'

export default function MainTrainer() {
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
        tag: 'Alejandro Elvira Ramirez',
        route: '/mainTrainer/trainerUsers/alejandroElviraRamirez',
    },
    {
        id: 2,
        tag: 'Alejandro Elvira Ramirez',
        route: '/mainTrainer/trainerUsers',
      
    },
    {
        id: 3,
        tag: 'Alejandro Elvira Ramirez',
        route: '/mainTrainer/trainerUsers',

    },
    {
        id: 4,
        tag: 'Alejandro Elvira Ramirez',
        route: '/mainTrainer/trainerUsers',
    },
    ]
    const headerMenu = [
        
        {
            tittle: 'Usuarios',
            subTittle:'',
            icon: <svg class="h-10 w-10 text-main-blue"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>,
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
            <List options={options}/>
            </div>
        </div>
    </>
    );
  }