import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { CSSTransition } from 'react-transition-group';


type AccordionItemProps = {
  title: string;
  content: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b m-5 transition ease-in-out delay-150">
      <button
        className="w-full flex justify-between items-center p-4 transition ease-in-out delay-150 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-[#113553] text-xl font-bold'>{title}</span>
        <span className='border p-2 rounded-full'>{isOpen ? <MinusIcon className='w-7 stroke-[#113553]' /> : <PlusIcon className='w-7 stroke-[#113553]'/>}</span>
      </button>
      {isOpen && <div className="p-4 text-[#5f5f5f] text-lg font-medium">{content}</div>}
    </div>
  );
};

type AccordionProps = {
  items: AccordionItemProps[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="border rounded-md">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
