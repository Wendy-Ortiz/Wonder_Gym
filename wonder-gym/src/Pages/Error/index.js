import { useNavigate  } from "react-router-dom";

export default function Error(props) {
    const navigate = useNavigate(); 
    const routeChange = () =>{
        navigate('/');
    }

    return(
    <div className="bg-main-gray h-screen w-full text-white">
        <div className="font-bebasNeue text-center">
            <h1 className="text-main-gold pt-16 md:pt-24 lg:pt-28 text-6xl md:text-7xl lg:text-8xl"> {props.errorCode} </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl"> {props.errorName} </h2>
        </div>
        <div className="flex justify-center">
            <button className="font-montserrat text-white font-bold bg-main-blue m-6 rounded-lg h-12 w-32 lg:w-48" onClick={routeChange}> Home </button>
        </div>
    </div>
    );
}