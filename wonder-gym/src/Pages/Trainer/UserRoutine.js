import React from 'react'; 
import jwtDecode from "jwt-decode";  
import { useDispatch } from "react-redux";
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
    const token = localStorage.getItem('token');
    const decryptedToken = jwtDecode(token);
    const name = (decryptedToken.userName).split(" ");

    /*const [options,setOptions] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchUsers = async () => {
            const token = localStorage.getItem('token');
            try{
                const usersFetch = await fetch('http://localhost:3001/users/user', {
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

    }, []);*/

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

    const options = [
        {
            id: 1,
            tag: 'Rutina Lunes',
            route: `/mainTrainer/${name[0]}/rutinaLunes`,
            icon: "",
        },
        {
            id: 2,
            tag: 'Rutina Martes',
            route: `/mainTrainer/${name[0]}/rutinaLunes`,
            icon: "",
        },
        {
            id: 1,
            tag: 'Rutina Lunes',
            route: `/mainTrainer/${name[0]}/rutinaLunes`,
            icon: "",
        },
        {
            id: 2,
            tag: 'Rutina Martes',
            route: `/mainTrainer/${name[0]}/rutinaLunes`,
            icon: "",
        },
        {
            id: 1,
            tag: 'Rutina Lunes',
            route: `/mainTrainer/${name[0]}/rutinaLunes`,
            icon: "",
        },
        {
            id: 2,
            tag: 'Rutina Martes',
            route: `/mainTrainer/${name[0]}/rutinaLunes`,
            icon: "",
        },


    ]
    const headerMenu = [
        
        {
            title:  name[0],
            subTittle:'',
            searchFlag
        }
    ]

   
    return (
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
    
    );
  }