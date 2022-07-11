import AccordionComponent from '../../components/Accordion'

export default function AccordionList(props){
    return (
        <>
        {props && (props.options).map((input)=>{
            return <div key={input.id} className="bg-main-gray md:text-lg lg:text-xl">
                <div className="flex items-center">
                    <AccordionComponent className="flex items-center" options={input.exercises} checkboxFlag={props.checkboxFlag}/>
                </div>
            </div>
            })}
        </>
    );
}