import React from "react";
import img from "../../assets/img/empresa.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { FaBars } from "react-icons/fa";
import ItemsMenu from "./submenu/ItemsMenu";
import { useClickOutside } from "../../services/Mause";
import { VscBellDot } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5"
import "./submenu/DiseñoScroll.css";

const SidebarNav = styled.div`
  width: ${({ sidebar }) => (sidebar ? "64px" : "228px")};
  z-index: 1000;
  height: 700px;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  position: fixed;
  background-color: rgb(38 38 38);

  @media (max-width: 500px) {
    width: ${({ sidebar }) => (sidebar ? "64px" : "78%")};
  }
`;

export const Sidebar = ({ sidebar, showSidebar, setSidebar }) => {
  let domNode = useClickOutside(() => {
    setSidebar(true);
  });

  return (
    <SidebarNav ref={domNode} sidebar={sidebar} className="w-full ">
      <div
        className=""
        style={{ height: `55px`, backgroundColor: `#66A31C` }}
      >
        <button className="text-white ml-7 mt-5 ">
          <FaBars onClick={showSidebar} />
        </button>
        <p
          className={`${sidebar ? "hidden" : ""} text-white left-20 relative`}
          style={{marginTop:`-25.7px`}}
        >
          GenomaX MD
        </p>
      </div>
      <div className="flex justify-center mt-4 items-center">
        <img alt="" src={img} className="w-14 h-14 rounded-xl" />
      </div>
      <div className={`${sidebar ? "hidden" : ""} flex flex-col justify-center pt-2`}>
        <span className="text-sm text-gray-300 text-center text-bold">
          Nexus Soluciones
        </span>
      </div>

      <div className={`${sidebar ? "pt-2 px-2" : ""} contenedor px-1 pt-5 w-full h-80`}>
        <ul className={`${sidebar ? "text-xl"  : ""}  flex flex-col space-y-2`} >
          {SidebarData.map((item, index) => {
            return <ItemsMenu sidebar={sidebar} item={item} key={index} />;
          })}
        </ul>
      </div>

      <div className="px-3 pt-8">
        <hr className="border-gray-300" />
      </div>
      <div className={`${sidebar ? "mt-5 text-xl ml-2" : ""} h-full w-full pt-2 pb-8`}>
        <ul>
          <li className="relative text-gray-300 hover:text-white focus-within:text-white">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <IoSettingsOutline />
            </div>
            <Link
              to=""
              className={`${
                sidebar ? "hidden" : ""
              } inline-block w-full py-2 pl-10 pr-4 text-base rounded hover:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-neutral-900`}
            >
              Soporte
            </Link>
          </li>

          <li className="relative text-gray-300 hover:text-white focus-within:text-white ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <button>
                <VscBellDot className={`${sidebar ? "mt-20" : ""} `} />
              </button>
            </div>
            <Link
              to=""
              className={`${
                sidebar ? "hidden" : ""
              } inline-block w-full py-2 pl-10 pr-4 text-base rounded hover:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-neutral-900`}
            >
              notification
            </Link>
          </li>
        </ul>
      </div>
    </SidebarNav>
  );
};
