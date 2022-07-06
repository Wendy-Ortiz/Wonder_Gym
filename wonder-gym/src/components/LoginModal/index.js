import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri';
import { postLogin } from "../../Slices/user/requests/postLogin";

export default function LoginModal(props){
    const logo = '/logo120-56_login-md.png';
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [userData, setUserData] = useState({
        userName: '',
        password: '',
    });

    const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
    //const errorMessage = useSelector((state) => state.user.errorMessage);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value });
    };

    const validateEmail = (email) => {
        return String(email).toLowerCase().match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    const validatePassword = (password) => {
        return String(password).match(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
          );
    }

    const validateData = () => {
        const emailIsValid = validateEmail(userData.userName);
        const passwordIsValid = validatePassword(userData.password);

        emailIsValid ? setValidEmail(true) : setValidEmail(false);
        passwordIsValid ? setValidPassword(true) : setValidPassword(false);

        return emailIsValid && passwordIsValid;
    }

    const handleCloseModal = () => {
        setUserData({ ...userData, 'userName': '' });
        setUserData({ ...userData, 'password': '' });
        props.setIsOpenLoginModal(false);
        setValidEmail(true);
        setValidPassword(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validData = validateData();
        if (validData) {
            const username = userData.userName;
            const password = userData.password;
            dispatch(
                postLogin({
                    username,
                    password,
                })
            );
        }
    }

    return userIsLoggedIn ? (
        <Navigate to="/" />
      ) : (
        props.isOpenLoginModal && (
        <div className={`fixed bg-main-gray-95-transp overflow-y-auto overflow-x-hidden top-0 left-0 w-full h-full justify-center items-center flex`} >
            <div id='LoginModalContainer' className= {`relative p-4 w-full max-w-2xl`}>
                <button className='absolute right-3 -top-10' onClick={handleCloseModal}>
                    <RiCloseLine color='white'size="3rem" />
                </button>
                {/* Login Modal Content */}
                <div className={`bg-white rounded-lg`} >
                    {/* Header */}
                    <div className={`pt-6 text-center `}>
                        <img className={`mx-auto`} src={logo} alt="login logo" />
                        <h1 className="font-bebasNeue py-6 text-5xl lg:text-6xl"> Iniciar Sesión </ h1>
                    </div >
                    {/* Body */}
                    <form className={`text-center font-montserrat`}>
                        <div className='p-6'>
                            <input className={`border-0 border-b border-black p-2 w-52 lg:w-96`} id='userName' type='text' placeholder='Email del Usuario' value={userData.userName} onChange={handleChange}/>
                        </div>
                        { !validEmail && <p className={`text-red-500 text-sm px-2 pb-2`}> Debes ingresar un email válido. </p>}
                        <div className='pb-6'>
                            <input className={`border-0 border-b border-black p-2 w-52 lg:w-96`} id='password' type='password' placeholder='Contraseña' value={userData.password} onChange={handleChange}/>
                        </div>
                        { !validPassword && <p className={`text-red-500 text-sm pb-2`}> Contraseña debe ser alfanúmerica y contener mínimo 8 dígitos. </p> }
                        <button className="text-white font-bold bg-main-blue m-6 rounded-lg h-12 w-48 lg:w-56" onClick={handleSubmit}> Ingresar </button>
                    </form>
                </div>
            </div>
        </div>
        )
    );
}