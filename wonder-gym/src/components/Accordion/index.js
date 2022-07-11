import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function AccordionComponent(props) {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <>
      <div key={1} className="w-screen" id="accordion-collapse" data-accordion="collapse"> 
        <Accordion open={open === 1} className="bg-main-gray md:text-lg lg:text-xl">
            <AccordionHeader onClick={() => handleOpen(1)} className="flex px-16 md:px-12 lg:px-24 pb-8 pt-8 md:pb-10 md:pt-10 lg:pb-12 lg:pt-12 items-center font-bold text-white hover:bg-main-blue-transparent border-b">{props.options.title}</AccordionHeader>
            {props && props.options.options.map((input)=>{
              return (
                <>
                <AccordionBody className="flex px-8 h-16 pb-2 pt-2 md:px-12 lg:px-24 md:pb-3 md:pt-3 lg:pb-4 lg:pt-4 items-center border border-t-0 bg-white border-white dark:border-gray-700">
                    <li className="flex items-center list-disc text-main-gray dark:text-main-gray">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-start items-center">
                              { props.checkboxFlag === true &&
                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 rounded-full shadow text-main-blue bg-main-gray border-main-gray focus:ring-main-blue dark:focus:ring-main-blue dark:ring-offset-main-gray focus:ring-2 dark:bg-main-gray dark:border-main-gray"></input>
                              }
                              <p className="pl-4 md:text-lg w-48">{input}</p>
                            </div>
                            <div className="flex justify-end items-center">
                                <button className="h-16 items-center">
                                  {props.options.button}
                                </button>
                            </div>
                        </div>
                    </li>
                </AccordionBody>
                </>
              );  
              })}
          </Accordion>
        </div>
    </>
  );
}
