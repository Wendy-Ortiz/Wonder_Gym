import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

function ListItem(props) {
    return <p className='m-4'><a href={props.route}> {props.tag} </a></p>;
}

export default function Headers(props){
    const logo = props.logo_src;
    const background = props.bg_gray ? 'bg-main-gray': 'bg-white';
    const icon_color =  props.bg_gray ? 'white': 'black';

    const [showUserMenu, setShowUserMenu] = useState(false);

    return (    
    <div className={`flex h-24 ${background} w-full sm:px-8 md:px-12 lg:px-24`}>
        <div className="flex items-center w-6/12 pl-4">
            <img src={logo} alt="logo" />
        </div>
        <div className="flex pr-4 items-center justify-end w-6/12">
            <FiMenu color={icon_color} size="2rem" onClick={() => { setShowUserMenu(true); }} className="cursor-pointer"/>
            {console.log(showUserMenu)}
            {
            showUserMenu && (
                <>
                    <div onClick={() => { setShowUserMenu(false); }} className="fixed top-0 left-0 h-full w-full"></div>
                    <div className="bg-gray-200 fixed right-0 top-[6.25rem] h-auto w-[200px]">  
                        {props.values.map((input) => (
                            <ListItem key={input.id} route={input.route} tag={input.tag}  />
                        ))}
                    </div>
                </>
            )
            }
        </div>
    </div>
    );
};
