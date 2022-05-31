import { FiMenu } from 'react-icons/fi';

export default function Headers(){
    const logo = '/logo84-64.png'

    return (    
    <div className={`flex h-24 bg-main-gray w-full sm:px-8 md:px-12 lg:px-24`}>
        <div className="flex items-center w-6/12 pl-4">
            <img src={logo} alt="logo" />
        </div>
        <div className="flex pr-4 items-center justify-end w-6/12">
            <FiMenu color="white" size="2em"/>
        </div>
    </div>
    );
};
