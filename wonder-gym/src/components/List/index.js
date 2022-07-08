import { Link } from "react-router-dom";

export default function Lists(props){

    return (
    <>
        {props && props.options.map((input)=>{
        return (
        <div key={input.id} className="bg-main-gray md:text-lg lg:text-xl">
            <Link className="items-center" to={input.route ? input.route : `/mainTrainer/trainerUsers/${input.name}` }>
                <div className="flex px-8 md:px-12 lg:px-24 pb-8 pt-8 md:pb-10 md:pt-10 lg:pb-12 lg:pt-12 items-center font-bold text-white hover:bg-main-blue-transparent border-b">
                    <div className="h-10"></div>
                    <div className="flex items-center">
                        <div className ="pr-8">
                            {input.icon} 
                        </div>
                        <div className="font-montserrat">
                            {input.tag ? input.tag : input.name}
                        </div>
                    </div>
                </div>
            </Link>
        </div> 
        );  
        })}
    </>
    );
}