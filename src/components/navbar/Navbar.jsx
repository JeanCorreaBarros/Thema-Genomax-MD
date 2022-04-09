import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";
import ModalButtonMas from "../modals/ModalButtonMas";
import ModalNotificacion from "../modals/ModalNotificacion";
import ModalPerfil from "../modals/ModalPerfil";
import { Sidebar } from "../sidebar/Sidebar";
import { useClickOutside } from "../../services/Mause";
import perfil from "../../assets/img/perfil.png";

const Nav = styled.span`
  background: #66a31c; 
  height: 55px;
  width: 100%;
  position: fixed;
  display: flex;
  vertical-align: top;
  align-items: center;
  padding: 10px;
  box-shadow: -1px 7px 24px -8px #497513;
  z-index: 999;
`;

const Navbar = (props) => {
  function NavItem(props) {
    const [isOpen, setIsOpen] = useState(false);

    let domNode = useClickOutside(() => {
      setIsOpen(false);
    });

    return (
      <div ref={domNode} className="items-center justify-center flex">
        <button onClick={() => setIsOpen((isOpen) => !isOpen)} type="button">
          {props.img}
          {props.icon}
        </button>
        {isOpen && props.children}
      </div>
    );
  }

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const [noti, setNoti,] = useState(false);
  const showNoti = () => {
    console.log(noti)
    setNoti(!noti);
  };
 

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Nav className="flex justify-between">
        <div className="flex justify-around items-center gap-x-6 pl-5 ">
          <button
            onClick={showSidebar}
            className="text-white  w-12 h-12 flex justify-center items-center rounded-3xl hover:bg-lime-700 "
          >
            <FaIcons.FaBars />
          </button>

          <div className="w-40 h-12 flex justify-center items-center text-white">
            <a href={"/"} className={` ${sidebar ? "hidden" : ""} relative right-5`}>
              GenomaX MD
            </a>
          </div>

          <div className=" hidden sm:w-12 sm:h-12 sm:flex sm:justify-center sm:items-center sm:rounded-3xl sm:hover:bg-lime-700 ">
            <NavItem icon={<BiPlusCircle className="text-white text-xl" />}>
              <ModalButtonMas />
            </NavItem>
          </div>
        </div>

        <div className="sm:flex sm:justify-center sm:items-between sm:gap-x-12 sm:pr-5">
          <div className=" hidden sm:w-12 sm:h-12 sm:flex sm:justify-center  sm:items-center sm:rounded-3xl sm:hover:bg-lime-700">
            <button
              onClick={showNoti}
              className="sm:text-white  sm:w-12 sm:h-12 sm:flex sm:justify-center sm:items-center sm:rounded-3xl sm:hover:bg-lime-700 "
            >
              <VscBellDot className="text-xl"/>
            </button>
          </div>
          <ModalNotificacion
            noti={noti}
            setNoti={setNoti}
          />
          <div className=" w-12 h-12 flex justify-center  items-center rounded-3xl hover:bg-lime-700">
            <NavItem
              img={
                <img
                  src={user.photoURL ? user.photoURL : perfil}
                  alt=""
                  className=" w-10 h-10 rounded-3xl"
                />
              }
            >
              <ModalPerfil />
            </NavItem>
          </div>
        </div>
      </Nav>
      <Sidebar
        sidebar={sidebar}
        setSidebar={setSidebar}
        showSidebar={showSidebar}
      />
    </>
  );
};

export default Navbar;
