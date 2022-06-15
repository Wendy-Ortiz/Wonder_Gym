import React from 'react';   
import Header from '../../components/Header'
import List from '../../components/List'

const ListItem = (props) => {
    return <p className='m-4'><a href={props.route}> {props.tag} </a></p>;
};
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
        tag: 'Usuarios',
        route: '/trainerUsers'
    },
    {
        id: 2,
        tag: 'Nueva Rutina',
        route: '/newRoutine'
    },
    {
        id: 3,
        tag: 'Entrenar',
        route: '/toTrain'
    },
    {
        id: 4,
        tag: 'Noticias',
        route: '/News'
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