import {React, useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate  } from 'react-router-dom' 
import Header from '../../components/Header'
import List from '../../components/List'
import SecondHeader from '../../components/SecondHeader'
import FixButton from '../../components/FixButton'
import { logout } from "../../Slices/user/userSlice";

export default function SelectExercises() {
    var searchFlag = false;
    const dispatch = useDispatch();
    const navigate = useNavigate ();
    const name = useSelector(
        (state) => state.user.name
    );
    const id = useSelector(
        (state) => state.user.id
    );

    const [options,setOptions] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchUsers = async () => {

            const token = localStorage.getItem('token');

            try {
                const usersFetch = await fetch('http://localhost:3001/users/user', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json",
                        "authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                    id: {id}
                    }),
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
            
        });

    const MenuValues = [
        {
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

    const headerMenu = [
        
        {
            title:  name,
            subTittle:'',
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
                        <div key={options.id} className="items-center bg-main-gray w-full font-montserrat">
                            <p className="items-center text-white font-bold text-lg pl-16 pt-4" > Datos:</p>
                            <div className="flex pl-16 pt-4 columns-2">
                                <div className="flex items-center">
                                    <img src = "/icons/weight_Kg.svg" alt="News Icon"/>
                                    <p className="items-center text-white font-extralight text-base px-4"> {/*contraindications[0]*/}80.56 kg</p>

                                </div>
                                <div className="flex items-center p-2">
                                    <img src = "/icons/height.svg" alt="News Icon"/>,
                                    <p className="items-center text-white font-extralight text-base px-2"> {/*contraindications[0]*/} 1.56kg</p>
                                </div>
                            </div>
                            <p className="items-center text-white font-bold text-lg pl-16 pt-4">Contraindicaciones:</p>
                            <div>
                                <p className="items-center text-white font-extralight text-base pl-16"> {/*contraindications[0]*/} No tiene contraaindicaciones </p>
                            </div>
                            <br></br>
                        </div>
                        <FixButton/>
                        <div>
                            <div className="flex items-center px-8 md:px-12 lg:px-24 pb-8 pt-8 md:pb-10 md:pt-10 lg:pb-12 lg:pt-12 bg-white font-bold text-secundary-blue border-b">
                                <h1 className="flex items-center px-8 md:px-12 lg:px-24  text-3xl md:text-4x1 lg:text-5xl" id="username">RUTINAS</h1>
                                <img  className="flex items-center" src = "/icons/routine2_icon_blue.svg" alt="New Routine Icon"/>
                            </div>
                            <List options={options}/> {/*<AccordionList options={options}/> */}
                        </div>
                    </div>
                </div>
            </>
        )
    
    );
  }