import { Link } from "react-router-dom";

export default function Lists(props){
    return (
        <>
        {props.options.map((input)=>{  
            return <div className="bg-main-gray md:text-lg lg:text-xl">
                    <Link classame="flex items-center" to={input.route}>
                        <div className="flex px-8 md:px-12 lg:px-24 pb-8 pt-8 md:pb-10 md:pt-10 lg:pb-12 lg:pt-12 items-center font-bold text-white hover:bg-main-blue-transparent border-b">
                            <div className="h-10"></div>
                            <li className="flex items-center">
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