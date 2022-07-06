import Accordion from '../../components/Accordion'
export default function AccordionList(props){
    return (
        <>
        {props && props.options.map((input)=>{  
            return <div className="bg-main-gray md:text-lg lg:text-xl">
                <div className="flex px-8 md:px-12 lg:px-24 pb-8 pt-8 md:pb-10 md:pt-10 lg:pb-12 lg:pt-12 items-center font-bold text-white hover:bg-main-blue-transparent border-b">
                    <div className="h-10"></div>
                    <li className="flex items-center">
                        <Accordion options = {input.options}/>
                    </li>
                </div>
                </div>
            })}
        </>
    );
}