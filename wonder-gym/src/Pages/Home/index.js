import { useState } from 'react';
import { Navigate, useNavigate  } from 'react-router-dom'
import { useSelector } from 'react-redux';
import jwtDecode from "jwt-decode";
import Header from '../../components/Header'
import LoginModal from '../../components/LoginModal';

import { ROLES } from "../../utils/constants";

export default function Home() {
    const physicalDirection = "ECCI, Universidad de Costa Rica, San Pedro Montes de Oca, San José"
    const email = "wondergym.contacto@ucr.ac.cr";
    const phone = "2222 - 2222";
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
          {/* Services Section*/}
          <div className='bg-main-gray pb-8 md:pb-16 lg:pd-24'>
              <p className={`pl-[8.333333%] text-main-gold text-4xl font-bebasNeue pt-8 md:pt-16 lg:pt-24`}> SERVICIOS </p>
              <div className='pl-[8.333333%] md:flex lg:flex'>
                <div className='w-1/2 font-bold tracking-wide text-white text-xl font-montserrat'>
                  <p className='pt-8'> GIMNACIO </p>
                  <p className='pt-8'> NATACIÓN </p>
                  <p className='pt-8'> SPINNING </p>
                </div>
                <div className='w-1/2 font-bold text-white text-xl font-montserrat'>
                  <p className={`pt-8`}> YOGA </p>
                  <p className={`pt-8`}> ENTRENADOR PERSONAL </p>
                </div>
            </div>
          </div>
          {/* Contact Section*/}
          <div className='bg-main-gray pb-8 md:pb-16 lg:pd-24'>
              <p className={`pl-[8.333333%] text-main-gold text-4xl font-bebasNeue pt-8 md:pt-16 lg:pt-24`}> CONTACTO </p>
              <div className='pl-[8.333333%] md:flex lg:flex'>
                <div className='w-full tracking-wide text-white text-sm font-montserrat pb-8 md:flex lg:flex'>
                  <div className=' mr-6'>
                    <p className='pt-2'> {`Ubicación: `} </p>
                    <p> {`${physicalDirection}`} </p>
                  </div>
                  <div className=' mr-6'>
                    <p className='pt-2'> {`Correo electrónico: `} </p>
                    <p> {`${email}`} </p>
                  </div>
                  <div className=' mr-6'>
                    <p className='pt-2'> {`Teléfono: `} </p>
                    <p> {`${phone}`}</p>
                  </div>
                </div>
            </div>
          </div>
          </div>
        <LoginModal isOpenLoginModal={isOpenLoginModal} setIsOpenLoginModal={setIsOpenLoginModal} />
        </>
        )}
      </>
    );
  }