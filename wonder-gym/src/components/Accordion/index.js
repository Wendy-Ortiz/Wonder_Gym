import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function AccordionList(props) {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <>
    {props.options.map((input)=>{
        return <div id="accordion-collapse" data-accordion="collapse">
            {/**TODO: Separe deploy for option*/}
            <Accordion open={open === 1} onClick={() => handleOpen(1)} className="bg-main-gray md:text-lg lg:text-xl">
                <AccordionHeader className="flex px-8 md:px-12 lg:px-24 pb-8 pt-8 md:pb-10 md:pt-10 lg:pb-12 lg:pt-12 items-center font-bold text-white hover:bg-main-blue-transparent border-b">{input.tittle}</AccordionHeader>
                <AccordionBody className="p-5 border border-t-0 bg-white border-white dark:border-gray-700">
                    <ul className="pl-5 list-disc text-main-gray dark:text-main-gray">
                        {/**TODO: Show all list*/}
                        {/**TODO: Responsive*/}
                        <div className="flex items-center">
                            <div className = "flex w-10/12">
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 p-8 align-middle text-main-blue bg-main-gray rounded border-main-gray focus:ring-main-blue dark:focus:ring-main-blue dark:ring-offset-main-gray focus:ring-2 dark:bg-main-gray dark:border-main-gray"></input>
                                <text className="pl-3 align-middle">{input.option}</text>
                            </div>
                            <div className = "pl-5 flex w-2/12">
                                <button className="flex items-center justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white fill-main-blue" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </ul>
                </AccordionBody>
            </Accordion>
            </div>
         })}
    </>
  );
}