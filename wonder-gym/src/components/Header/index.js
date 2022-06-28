import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
  
const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const createMenuButtons = (input, setShowUserMenu, handleClick) => {
    const handleButtonClick = () => {
        setShowUserMenu(false);
        handleClick()
    }

    return (
        <button className={`flex p-0 w-full h-20 text-black justify-center items-center`} key={input.id} onClick={handleButtonClick} >
            {input.tag}
        </button>
    );
}

const createMenu = (values, showUserMenu, setShowUserMenu, width) => {
    const commonProps = `bg-stone-300 absolute top-[6.15rem] h-auto w-[200px] divide-y divide-stone-500`
    let menuPosition = width <= 1024
        ? `${commonProps} left-0 ${showUserMenu ? 'translate-x-0':'-translate-x-full'} ease-in-out duration-300`
        : `${commonProps} right-0 ${showUserMenu ? 'translate-x-full':'translate-x-0'} ease-in-out duration-300`;

     return (
        <>
        <div onClick={() => { setShowUserMenu(false); }} className="absolute top-[6.25rem] left-0 h-full w-full"></div>
            <div className={menuPosition}>
            {values.map((input) => (
                createMenuButtons(input, setShowUserMenu, input.handleClick)
            ))}
        </div>
        </>
     );
}

export default function Headers(props){
    const { width } = useWindowDimensions();
    const logo = props.logo_src;
    let background = props.bg_gray ? 'bg-main-gray': 'bg-white';
    const icon_color =  props.bg_gray ? 'white': 'black';

    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
    width <= 1024 ?
    <div className={`flex h-24 ${background} w-full sm:px-8 md:px-12 lg:px-24`}>
        <div className="flex items-center w-6/12 pl-4 text-white">
            <FiMenu color={icon_color} size="2rem" onClick={() => { showUserMenu ? setShowUserMenu(false) : setShowUserMenu(true); }} className="cursor-pointer"/>
            {createMenu(props.values, showUserMenu, setShowUserMenu, width)}
        </div>
        <div className="flex pr-4 items-center justify-end w-6/12">
            <img src={logo} alt="logo" />
        </div>
    </div>
    :
    <div className={`flex h-24 ${background} w-full sm:px-8 md:px-12 lg:px-24`}>
        <div className="flex items-center w-6/12 pl-4 text-white">
            <img src={logo} alt="logo" />
        </div>
        <div className="flex pr-4 items-center justify-end w-6/12">
            <FiMenu color={icon_color} size="2rem" onClick={() => { showUserMenu ? setShowUserMenu(false) : setShowUserMenu(true); }} className="cursor-pointer"/>
            {createMenu(props.values, showUserMenu, setShowUserMenu, width)}
        </div>
    </div>
    );
};
