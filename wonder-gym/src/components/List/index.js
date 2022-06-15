import { Link } from "react-router-dom";

export default function Lists(props){
    return (
        <>
   
        <div class ="bg-white">
            <br></br>
            <h1 class="pl-6 font-bold text-3xl" id="username"> ¡HOLA USERNAME! </h1>
            <br></br>
            <h2 class= "pl-6 font-bold text-blue-800" id="trainerSubTittle">¿QUÉ DESEAS HACER HOY?</h2>
            <br></br>
        </div>
            {props.options.map((input)=>{  
                
                return <div class="flex-col mx-auto w-full items-center justify-center bg-main-white">
                        <Link class="font-bold dark:text-white items-center" to={input.route}>
                            <div class="hover:bg-gray-50 flex flex-1 items-center p-8">
                                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4"></div>
                                    <li class="flex flex-row">{input.tag}</li>
                            </div>
                        </Link>
                    </div>

            })}
        </>
    );
}