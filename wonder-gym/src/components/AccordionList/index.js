import AccordionComponent from '../../components/Accordion'

export default function AccordionList(props){
    console.log('Accordion List ',props);
    return (
        <>
        {props && (props.options).map((input)=>{
            console.log(input)
            return <div key={input.id} className="bg-main-gray md:text-lg lg:text-xl">
                <li className="flex items-center">
                    <AccordionComponent className="flex items-center" options={input.exercises}/>
                </li>
            </div>
            })}
        </>
    );
}