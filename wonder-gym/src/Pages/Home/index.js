import { useState } from 'react';
import { Navigate, useNavigate  } from 'react-router-dom'
import { useSelector } from 'react-redux';
import jwtDecode from "jwt-decode";
import Header from '../../components/Header'
import LoginModal from '../../components/LoginModal';

import { ROLES } from "../../utils/constants";

export default function Home() {
    const navigate = useNavigate ();
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false)
    const userIsLoggedIn = useSelector(
      (state) => state.user.userIsLoggedIn
    );

    const MenuValues = [
      {
          id: 1,
          tag: 'Iniciar Sesión',
          handleClick: () => setIsOpenLoginModal(true),
      },
      {
        id: 2,
        tag: 'Registrarme',
        handleClick: () => navigate(`/register`),
      },
    ]

    const redirectToRolHomePage = () => {
      const token = localStorage.getItem('token');
      const decryptedToken = jwtDecode(token);
      return (decryptedToken.roles).find(element => element === ROLES.TRAINER) ?  <Navigate to="/mainTrainer"/> : <Navigate to="/user"/> ;
    }
    
    return (
      <>
        { userIsLoggedIn ? (
          redirectToRolHomePage()
        ) : (
        <>
          <div className='divide-y-2 divide-main-gold'>
          <div className='m-0'>
            <Header bg_gray={true} logo_src='/logo84-64.png' values={MenuValues}/>
          </div>
          {/* Main Title*/}
          <div className={`m-0 flex bg-main-gray h-auto w-full px-8 md:px-12 lg:px-24`}>
            <div className=''>
              <div className={`font-bebasNeue w-full pt-10 h-auto`}>
                <div className={`flex`}>
                  {/* Decorator*/}
                  <div className={`w-1/12`}><img className={`object-left`} src={`/Home_header_decorator.png`} alt="login logo" /></div>
                  {/* Sub Title*/}
                  <div className={`w-11/12 text-white text-2xl justify-center`}> Prepárate para </div>
                </div>
                <div className={`pl-[8.333333%] text-5xl`}>
                  <p className={`text-white`}> MOTIVARTE, SUPERARTE Y CONVERTIRTE EN</p>
                  <p className={`text-main-gold`}> TU MEJOR VERSIÓN </p>
                </div>
              </div>
              <div  className='-mx-8 md:-mx-12 lg:-mx-24 mt-8'>
                <img className='object-cover' src={'/foto_gym_01.png'} alt="logo" />
              </div>
            </div>
          </div>
          {/* Another Section*/}
          <div className='bg-main-gray h-screen'>

          </div>
          </div>
        <LoginModal isOpenLoginModal={isOpenLoginModal} setIsOpenLoginModal={setIsOpenLoginModal} />
        </>
        )}
      </>
    );
  }