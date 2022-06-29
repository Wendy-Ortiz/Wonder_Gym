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
        route: '/mainTrainer/trainerUsers'
    },
    {
        id: 2,
        tag: 'Alejandro Elvira Ramirez',
        route: '/mainTrainer/newRoutine'
      
    },
    {
        id: 3,
        tag: 'Entrenar',
        route: '/mainTrainer/toTrain',
        icon: <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
    },
    {
        id: 4,
        tag: 'Noticias',
        route: '/mainTrainer/new',
        icon: <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg>
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