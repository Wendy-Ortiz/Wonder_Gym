import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

export default function LoginModal(props){
    const logo = '/logo120-56_login-md.png';
    const [userData, setUserData] = useState({
        userName: '',
        password: '',
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value });
    };

    const handleCloseModal = () => {
        setUserData({ ...userData, 'userName': '' });
        setUserData({ ...userData, 'password': '' });
        props.setIsOpenLoginModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userData);
    }

    return(
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
                    <form className={`text-center `}>
                        <div className='p-6'>
                            <input className={`border-0 border-b border-black p-2 w-52 lg:w-96`} id='userName' type='text' placeholder='Email o Usuario' value={userData.userName} onChange={handleChange}/>
                        </div>
                        <div className='pb-6'>
                            <input className={`border-0 border-b border-black p-2 w-52 lg:w-96`} id='password' type='password' placeholder='Contraseña' value={userData.password} onChange={handleChange}/>
                        </div>
                        <button className="text-white font-bold bg-main-blue m-6 rounded-lg h-12 w-48 lg:w-56" onClick={handleSubmit}> Ingresar </button>
                    </form>
                </div>
            </div>
        </div>
        )
    );
}