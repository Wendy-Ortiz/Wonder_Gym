import { useState } from 'react';
import { useNavigate  } from 'react-router-dom'

import Header from '../../components/Header'
import LoginModal from '../../components/LoginModal';

export default function Home() {
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false)
    const navigate = useNavigate ();

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

    return (
      <>
        <div className='divide-y-2 divide-main-gold'>
          <div className='m-0'>
            <Header bg_gray={true} logo_src='/logo84-64.png' values={MenuValues}/>
          </div>
          <div className={`m-0 flex h-screen bg-main-gray w-full px-8 md:px-12 lg:px-24`}>
            <div className={`font-bebasNeue w-full pt-10 h-20`}>
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
          </div>
        </div>
        <LoginModal isOpenLoginModal={isOpenLoginModal} setIsOpenLoginModal={setIsOpenLoginModal} />
      </>
    );
  }