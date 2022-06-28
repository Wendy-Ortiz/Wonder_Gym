import { useState } from 'react';
import Header from '../../components/Header'
import LoginModal from '../../components/LoginModal';

export default function Home() {
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false)

    const MenuValues = [
      {
          id: 1,
          tag: 'Iniciar Sesión',
          handleClick: () => setIsOpenLoginModal(true),
      },
      {
        id: 2,
        tag: 'Registrarme',
        handleClick: () => console.log('Registrarme'),
      },
    ]

    return (
      <>
        <div className='divide-y-2 divide-main-gold'>
          <div className='m-0'>
            <Header bg_gray={true} logo_src='/logo84-64.png' values={MenuValues}/>
          </div>
          <div className={`m-0 flex h-screen bg-main-gray w-full sm:px-8 md:px-12 lg:px-24`}>
          </div>
        </div>
        <LoginModal isOpenLoginModal={isOpenLoginModal} setIsOpenLoginModal={setIsOpenLoginModal} />
      </>
    );
  }