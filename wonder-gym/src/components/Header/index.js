import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Headers(){
    const logo = '/logo84-64.png'

    const [showUserMenu, setShowUserMenu] = useState(true);

    return (    
    <div className={`flex h-24 bg-main-gray w-full sm:px-8 md:px-12 lg:px-24`}>
        <div className="flex items-center w-6/12 pl-4">
            <img src={logo} alt="logo" />
        </div>
        <div className="flex pr-4 items-center justify-end w-6/12">
            <FiMenu color="white" size="2rem" onClick={() => { setShowUserMenu(true); }} className="cursor-pointer"/>
            {console.log(showUserMenu)}
            {
            showUserMenu && (
                <>
                    <div onClick={() => { setShowUserMenu(false); }} className="fixed top-0 left-0 h-full w-full"></div>
                    <div className="bg-gray-200 fixed right-0 top-[6.25rem] h-auto w-[200px]">
                        <p className='m-4'> Mi perfil </p>
                        <hr className='bg-gray-500 h-0.5'/>
                        <p className='m-4'> Configuraciones </p>
                        <hr className='bg-gray-500 h-0.5'/>
                        <p className='m-4'> Cerrar Sesión </p>
                    </div>
                </>
            )
            }
        </div>
    </div>
    );
};
