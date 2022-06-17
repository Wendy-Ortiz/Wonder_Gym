import React from 'react';   
import Header from '../../components/Header'
import List from '../../components/List'

export default function MainTrainer() {

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
        route: '/logOut'
    },
    ]

    const options = [
    {
        id: 1,
        tag: 'Mis rutinas',
        route: '/users/routine',
        icon: <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  <line x1="13" y1="8" x2="15" y2="8" />  <line x1="13" y1="12" x2="15" y2="12" /></svg>
    },
    {
        id: 2,
        tag: 'Rutinas básicas',
        route: '/users/basicRoutine',
        icon: <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
      </svg>
      
    },
    {
        id: 3,
        tag: 'Calentamientos',
        route: '/users/warmUps',
        icon: <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
    },
    {
        id: 4,
        tag: 'Ver noticias',
        route: 'users/news',
        icon: <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg>
    },
    ]

    return (
    <>
        
        <div className='m-0'>
          <Header bg_gray={true} logo_src='/logo84-64_v2.png' values={MenuValues}/>
        </div>
        <hr className='bg-main-gold h-1'/>
        <div className={`m-0 h-screen bg-main-gray w-full sm:px-8 md:px-12 lg:px-24`}>
            <div className='m-0'>
            <List options={options}/>
            </div>
        </div>
    </>
    );
  }