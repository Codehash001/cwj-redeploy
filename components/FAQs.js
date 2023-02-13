import Raect, { useState, Fragment } from "react";
import data from './data.json'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


export default function Faqs() {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
   
    const customAnimation = {
      mount: { scale: 1 },
      unmount: { scale: 0.9 },
    };

    return(
        <>
        {/* <div id='faqs'className='md:px-16 px-2 my-[14px] rounded-lg'data-aos="fade-up">
            <h1 className='md:text-[40px] text-[30px] bg-gradient-to-r from-rose-600 via-red-700 to-red-600 bg-clip-text text-transparent font-Archivo text-center uppercase font-semibold tracking-wide mb-8'> Frequently Asked Questions</h1>
        {data.map ((item) =>
            <div key={item.id} className='my-6'>
            <Accordian id={item.id} title={item.title} content={item.description} active={active} setActive={setActive}/>
            </div>
        )}
        </div> */}

        <div id='faq'className='md:mx-16 mx-2 p-6 my-[44px] rounded-lg'data-aos="none">
      <h1 className='md:text-[40px] text-[30px] bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent font-Archivo text-center uppercase font-bold tracking-wide mb-8'data-aos="fade-up"> Frequently Asked Questions</h1>
      {data.map((item)=>
      <div key={item.id} className='my-4 filter shadow drop-shadow-lg' data-aos="fade-up" data-aos-delay="{data.delay}">
      <Accordion open={open === (item.id)} animate={customAnimation} >
        <AccordionHeader onClick={() => handleOpen(item.id)} className='text-black dark:text-white font-Archivo text-[21px]'>
          {item.title}
        </AccordionHeader>
        <AccordionBody className='text-justify dark:text-gray-300 text-gray-700 font-Archivo  text-[20px]'>
         {item.description}
        </AccordionBody>
      </Accordion>
      </div>)}
    </div>
        </>
    )
}
