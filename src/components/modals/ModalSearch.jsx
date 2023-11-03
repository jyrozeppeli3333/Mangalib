import React from "react";
import { BiSearch } from "react-icons/bi";
import {RxCross1} from 'react-icons/rx'
const ModalSearch = ({ onClose, isOpen }) => {
  const handleInnerClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      {isOpen && (
        <div onClick={onClose} className="m-auto w-[100%] pl-[450px] pt-[10px] fixed inset-0 bg-black bg-opacity-80  ">
          <div className="relative">
            <BiSearch className="absolute top-1/2 left-[10px] transform -translate-y-1/2 text-[#000000]" />
            <input
              type="text"
              placeholder="Поиск манги"
              className="border-none p-[10px] pl-[30px] w-[600px] rounded-md text-[#000] focus:border-none focus:outline-none focus:ring-0"
              onClick={handleInnerClick}
            />
            <button
              onClick={() => onClose()}
              className="absolute top-1/2 left-[570px] transform -translate-y-1/2 text-[#000000]"
            >
              <RxCross1 className="w-[25px]"/>
            </button>
          </div>
          <div className="flex flex-row gap-[10px] items-cente0 pt-[10px]">
            <button onClick={handleInnerClick} className="text-[#DDDDDD] bg-[#36373d] py-[3px] px-[10px] rounded-sm active:bg-[#ffa332] active:text-[desired-active-text-color]">
              Манга
            </button>
            <button onClick={handleInnerClick} className="text-[#DDDDDD] bg-[#36373d] py-[3px] px-[10px] rounded-sm active:bg-[#ffa332] active:text-[desired-active-text-color]">
              Персона
            </button>
            <button onClick={handleInnerClick} className="text-[#DDDDDD] bg-[#36373d] py-[3px] px-[10px] rounded-sm active:bg-[#ffa332] active:text-[desired-active-text-color]">
              Издатель
            </button>
            <button onClick={handleInnerClick} className="text-[#DDDDDD] bg-[#36373d] py-[3px] px-[10px] rounded-sm active:bg-[#ffa332] active:text-[desired-active-text-color]">
              Переводчик
            </button>
            <button onClick={handleInnerClick} className="text-[#DDDDDD] bg-[#36373d] py-[3px] px-[10px] rounded-sm active:bg-[#ffa332] active:text-[desired-active-text-color]">
              Пользователь
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSearch;
