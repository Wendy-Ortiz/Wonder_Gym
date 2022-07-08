import { useEffect } from 'react';   
import { useState } from 'react';   
import Header from '../../components/Header'
import List from '../../components/List'
import SecondHeader from '../../components/SecondHeader'

export default function MainTrainer() {
    var searchFlag = true;
    const [options,setOptions] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchUsers = async () => {
            //const usersFetch = await fetch (''); /*API */
            //const usersJSON = await usersFetch.json();
            //setOptions(usersJSON);
            setOptions ( [
                {
                    id: 1,
                    tag: 'Alejandro Elvira Ramirez',
                    route: '/mainTrainer/trainerUsers/alejandroElviraRamirez',
                },
                {
                    id: 2,
                    tag: 'María Hidalgo',
                    route: '/mainTrainer/trainerUsers/maríaHidalgo',
                
                },
                {
                    id: 3,
                    tag: 'Simey Ramirez',
                    route: '/mainTrainer/trainerUsers/simeyRamirez',
            
                },
                {
                    id: 4,
                    tag: 'Mario Alfaro',
                    route: '/mainTrainer/trainerUsers/marioAlfaro',
                },
            ]
            );
            setLoading(false);
        }
        fetchUsers();

    }, []);

    const MenuValues = [
        {
            tag: 'Mi perfil',
            route: '/mainTrainer/trainerProfile' /**Change route */
        },
        {
            tag: 'Configuraciones',
            route: '/mainTrainer/settings'
        },
        {
            tag: 'Cerrar Sesión',
            route: '/mainTrainer/logOut'
        },
    ]

    const headerMenu = [
        
        {
            tittle: 'Usuarios', 
            subTittle:'',
            icon: <img src = "/icons/users_icon.svg" alt="Users Icon"/>,
            searchFlag
        }
    ]

    return (
    
        loading ? <div className='fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <div className='w-16 h-16 border-b-2 border-main-blue rounded-full animate-spin'></div>
        </div> : (
            <>
                <div className='m-0'>
                <Header bg_gray={true} logo_src='/logo84-64.png' values={MenuValues}/>
                </div>
                <hr className='bg-main-gold h-1'/>
                <div className={`m-0 h-screen bg-main-gray w-full`}>
                    <div className='m-0'>
                    <SecondHeader options={headerMenu}/> 
                    <List options={options}/>  {/*how can I get this?*/}
                    </div>
                </div>
            </>
        )
    );
  }

