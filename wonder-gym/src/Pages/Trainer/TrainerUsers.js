import {  useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom'  
import { useDispatch } from "react-redux";
import Header from '../../components/Header'
import List from '../../components/List'
import SecondHeader from '../../components/SecondHeader'
import { logout } from "../../Slices/user/userSlice";

export default function MainTrainer() {
    var searchFlag = true;
    const [options,setOptions] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate ();
    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchUsers = async () => {
            const token = localStorage.getItem('token');
            try{
                const usersFetch = await fetch('http://localhost:3001/users', {
                    method: "GET",
                    headers: { "authorization": `Bearer ${token}` }
                });
                const usersJSON = await usersFetch.json();
                console.log('Lo logro ', usersJSON);
                setOptions(usersJSON);
                setLoading(false);
            } catch (error){
                console.log('Ay fallo :c')
                console.error(error);
            }
        }
        fetchUsers();

    }, []);

const MenuValues = [{
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

    const headerMenu = [{
            id: 1,
            title: 'Usuarios', 
            subTittle:'',
            icon: <img src = "/icons/users_icon.svg" alt="Users Icon"/>,
            searchFlag
        },
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
                    <List options={options}/> 
                    </div>
                </div>
            </>
        )
    );
  }

