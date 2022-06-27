import { Link } from "react-router-dom";

export default function Lists(props){
    return (
        <>
   
        {/*<div className="bg-white w-full sm:px-8 md:px-12 lg:px-24">
            <br></br>
            <h1 className="flex items-center w-10/12 pl-8 font-bold text-3xl" id="username"> ¡HOLA USERNAME! </h1>
            <br></br>
            <h2 className= "flex items-center w-10/12 pl-8 font-bold text-main-blue" id="trainerSubTittle">¿QUÉ DESEAS HACER HOY?</h2>
            <br></br>
        </div>*/}
    {props.options.map((input)=>{  
        
            return <div className="w-full bg-main-gray">
                    <Link classame="flex items-center" to={input.route}>
                        <div className="flex items-center font-bold pl-8 md:pl-20 lg:pl-32 pb-8 pt-8 md:pb-10 md:pt-10 text-white hover:bg-main-blue-transparent border-b dark:border-white">
                            <div className="flex items-center h-10"></div>
                            <li className="flex items-center h-1 mr-4 ">
                                <div className ="pr-8">
                                    {input.icon}
                                </div>
                                <div>
                                    {input.tag}
                                </div>
                            </li>
                        </div>
                    </Link>
                </div>
            })}
        </>
    );
}