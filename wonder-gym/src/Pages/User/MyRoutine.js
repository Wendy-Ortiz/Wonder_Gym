import {React, useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom' 
import Header from '../../components/Header'
import AccordionList from '../../components/AccordionList';
import SecondHeader from '../../components/SecondHeader'
import FixButton from '../../components/FixButton'
import { logout } from "../../Slices/user/userSlice";

export default function SelectExercises() {
    var {userId} = useParams();
    userId = parseInt(userId);
    var searchFlag = false;
    const dispatch = useDispatch();
    const navigate = useNavigate ();
    const name = useSelector(
        (state) => state.user.userName
    );

    const [options,setOptions] = useState(null);
    const [routines,setRoutines] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchUserData= async () => {
            const token = localStorage.getItem('token');
            try {
                const usersFetch = await fetch('http://localhost:3001/users/user', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json",
                        "authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        id: userId
                    }),
                });
                const usersJSON = await usersFetch.json();
                setOptions(usersJSON);
            } catch (error){
                console.error(error);
            }

            try {
                const routinesFetch = await fetch('http://localhost:3001/routines', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        id: userId
                    }),
                });
                const routinesJSON = await routinesFetch.json();
                setRoutines(routinesJSON);
            } catch (error){
                console.error(error);
            }

            setLoading(false);
        }

        fetchUserData();

        }, [userId]);


    const MenuValues = [
        {
            id: 1,
            tag: 'Mi perfil',
            handleClick: () => navigate(`/${userId}/profile`),
        },
        {
            id: 2,
            tag: 'Configuraciones',
            handleClick: () => navigate(`/${userId}/config`),
        },
        {
            id: 3,
            tag: 'Cerrar Sesión',
            handleClick: () => dispatch(logout()),
        },
    ]

    const headerMenu = [
        
        {
            id: 1,
            title:  "Mis Rutinas",
            subTittle:'',
            icon: <img src = "/icons/routine2_icon_blue.svg" alt="News Icon"/>,
            searchFlag
        }
    ]

   
    return (
        loading ? <div className='fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <div className='w-16 h-16 border-b-2 border-main-blue rounded-full animate-spin'></div>
        </div> : (
            <>
                <div>
                    <div className='m-0'>
                    <Header bg_gray={true} logo_src='/logo84-64.png' values={MenuValues}/>
                    </div>
                    <hr className='bg-main-gold h-1'/>
                    <div className={`m-0 h-screen bg-main-gray`}>
                        <div className='m-0'>
                            <SecondHeader options={headerMenu}/>
                        </div>
                        <div>
                            <AccordionList options={routines}/>
                        </div>
                    </div>
                </div>
            </>
        )
    
    );
  }