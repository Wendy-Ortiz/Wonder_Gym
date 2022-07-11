import React from 'react';   
import Header from '../../components/Header'
import SecondHeader from '../../components/SecondHeader'
import AccordionList from '../../components/AccordionList'

export default function SelectExercises() {
    var searchFlag = true;
    var checkboxFlag = true;

 
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

    const headerMenu = [
        
        {
            id: 1,
            title: 'Asignar a',
            subTittle:'',
            searchFlag
        },
    ]
    const options = [
        {
            id: 1,
            exercises: {
                title: "Sendillas",
                options: [                    
                    "Plancha plana",
                    "Plancha plana",
                ],
                button: ""
            },
        },
        {
            id: 2,
            exercises: {
                title: "Abominales",
                options: [                    
                    "Plancha plana",
                    "Plancha plana",
                ],
                button: ""
            },
        },
        {
            id: 3,
            exercises: {
                title: "Tricep",
                options: [                    
                    "Plancha plana",
                    "Plancha plana",
                ],
                button: ""
            },
        },
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
                <AccordionList options={options} checkboxFlag={checkboxFlag}/>
            </div>
        </div>
    </>
    );
  }