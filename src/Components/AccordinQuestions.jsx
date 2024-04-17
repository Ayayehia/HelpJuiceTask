import React, { useState } from "react";
import UpSign from "/chevron-up.png";
import DownSign from "/chevron-down.png";
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start font-inter border-b border-[#0F172A] pb-4 ">
        <button
          className="flex justify-between items-center font-medium w-full "
          onClick={onClick}
        >
          <span>{title}</span>
          <span>{isOpen ? <img src={UpSign} /> : <img src={DownSign} />}</span>
        </button>
        {isOpen && <div className="text-sm">{content}</div>}
      </div>
    </>
  );
};

const AccordinQuestions = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <>
      <div className=" max-w-[800px] mt-20 mb-[126px] flex flex-col items-center justify-center gap-4 px-6 mx-auto">
        <h3 className="font-plus font-extrabold text-3xl ">Common Question</h3>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            isOpen={openIndex === index}
            title={item.title}
            content={item.content}
            onClick={() => handleClick(index)}
          />
        ))}
        <div className="lg:flex lg:flex-row flex flex-col items-center lg:justify-between lg:w-full gap-4 lg:gap-0">
          <h3>Curious to learn more? </h3>
          <button className="bg-[#03132E] text-white rounded-lg py-2 px-7">
            Visit Help & Community Center
          </button>
        </div>
      </div>
    </>
  );
};

export default AccordinQuestions;
