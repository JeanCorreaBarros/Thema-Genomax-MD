import React from "react";
import "./modals.css";
import styled from "styled-components";
import { useClickOutside } from "../../services/Mause";


const Notificacion = styled.div`
  right: ${({ noti }) => (noti ? "0" : "32.6%")};
  transition-duration: 0.8s;
`;

const ModalNotificacion = ({ noti, setNoti }) => {
  let domNode = useClickOutside(() => {
    setNoti(true);
  });
  return (
    <Notificacion
      ref={domNode}
      noti={noti}
      className="w-1/5 bg-gray-50 absolute"
    >
      <div className="modal_notificacion flex justify-center pt-5 ">
        <div className="w-11/12 rounded-xl h-20 bg-gray-300 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className=" w-full h-full flex flex-col  justify-center items-center  ">
            <h3 className="font-semibold text-lg">Notificaciones</h3>
            <span>
              Usted Tiene<span className="text-red-600"> 2 </span> Nuevos
              Mensajes
            </span>
          </div>
          <div className=" w-full h-96 flex flex-col bg-gray-100 rounded-xl mt-1 pt-7 pb-5 items-center overflow-y-scroll overflow-hidden  "></div>
        </div>
      </div>
    </Notificacion>
  );
};

export default ModalNotificacion;
