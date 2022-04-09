import React, { useState } from "react";
import { VscBellDot } from "react-icons/vsc";
import img from "../../assets/img/empresa.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { FaBars } from "react-icons/fa";
import ItemsMenu from "./submenu/ItemsMenu";
import { useClickOutside } from "../../services/Mause";
import ModalNotificacion from "../modals/ModalNotificacion";
import './DiseñoScroll.css';


const SidebarNav = styled.nav`
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  z-index: 1000;
  height: 700px;
  transition-duration: 0.8s;
  position: fixed;
`;

export const Sidebar = ({ sidebar, showSidebar, setSidebar }) => {
  let domNode = useClickOutside(() => {
    setSidebar(false);
  });

  const [noti, setNoti] = useState(false);
  const showNoti = () => {
    console.log(noti);
    setNoti(!noti);
  };

  return (
    <SidebarNav
      ref={domNode}
      sidebar={sidebar}
      className="bg-neutral-50 absolute "
    >
      <div className=" bg-neutral-800 " style={{height:`55px`, backgroundColor:`#66A31C`}}>
        <button className="flex text-white h-full relative top-4 ml-8 justify-center item-center">
          <FaBars onClick={showSidebar} className="relative top-1 left-3.5"/>
          <p className="left-16 relative"> GenomaX MD</p>  
        </button>
        </div>
        <div className="flex justify-center bg-neutral-800" style={{width:`228px`}}>
          <img alt="" src={img} className="w-14 h-14 mt-4 rounded-xl" />
        </div>
        <div className="  flex flex-col justify-center pt-2 bg-neutral-800">
          <span className="text-sm text-gray-300  pt-1 text-center text-bold">
            Nexus Soluciones
          </span>
        </div>

      <div className="contenedor bg-neutral-800">
        <ul className="flex flex-col space-y-2">
          {SidebarData.map((item, index) => {
            return <ItemsMenu item={item} key={index} />;
          })}
        </ul>
      </div>

      <div className="px-6 pt-8 bg-neutral-800" style={{width:`228px`}}>
        <hr className="border-gray-300" />
      </div>

      <div className="h-full pt-4 pb-8 bg-neutral-800" style={{width:`228px`}}>
        <ul>
          <li className="relative text-gray-300 hover:text-white focus-within:text-white">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-base stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.1191 5.61336C13.0508 5.11856 12.6279 4.75 12.1285 4.75H11.8715C11.3721 4.75 10.9492 5.11856 10.8809 5.61336L10.7938 6.24511C10.7382 6.64815 10.4403 6.96897 10.0622 7.11922C10.006 7.14156 9.95021 7.16484 9.89497 7.18905C9.52217 7.3524 9.08438 7.3384 8.75876 7.09419L8.45119 6.86351C8.05307 6.56492 7.49597 6.60451 7.14408 6.9564L6.95641 7.14408C6.60452 7.49597 6.56492 8.05306 6.86351 8.45118L7.09419 8.75876C7.33841 9.08437 7.3524 9.52216 7.18905 9.89497C7.16484 9.95021 7.14156 10.006 7.11922 10.0622C6.96897 10.4403 6.64815 10.7382 6.24511 10.7938L5.61336 10.8809C5.11856 10.9492 4.75 11.372 4.75 11.8715V12.1285C4.75 12.6279 5.11856 13.0508 5.61336 13.1191L6.24511 13.2062C6.64815 13.2618 6.96897 13.5597 7.11922 13.9378C7.14156 13.994 7.16484 14.0498 7.18905 14.105C7.3524 14.4778 7.3384 14.9156 7.09419 15.2412L6.86351 15.5488C6.56492 15.9469 6.60451 16.504 6.9564 16.8559L7.14408 17.0436C7.49597 17.3955 8.05306 17.4351 8.45118 17.1365L8.75876 16.9058C9.08437 16.6616 9.52216 16.6476 9.89496 16.811C9.95021 16.8352 10.006 16.8584 10.0622 16.8808C10.4403 17.031 10.7382 17.3519 10.7938 17.7549L10.8809 18.3866C10.9492 18.8814 11.3721 19.25 11.8715 19.25H12.1285C12.6279 19.25 13.0508 18.8814 13.1191 18.3866L13.2062 17.7549C13.2618 17.3519 13.5597 17.031 13.9378 16.8808C13.994 16.8584 14.0498 16.8352 14.105 16.8109C14.4778 16.6476 14.9156 16.6616 15.2412 16.9058L15.5488 17.1365C15.9469 17.4351 16.504 17.3955 16.8559 17.0436L17.0436 16.8559C17.3955 16.504 17.4351 15.9469 17.1365 15.5488L16.9058 15.2412C16.6616 14.9156 16.6476 14.4778 16.811 14.105C16.8352 14.0498 16.8584 13.994 16.8808 13.9378C17.031 13.5597 17.3519 13.2618 17.7549 13.2062L18.3866 13.1191C18.8814 13.0508 19.25 12.6279 19.25 12.1285V11.8715C19.25 11.3721 18.8814 10.9492 18.3866 10.8809L17.7549 10.7938C17.3519 10.7382 17.031 10.4403 16.8808 10.0622C16.8584 10.006 16.8352 9.95021 16.8109 9.89496C16.6476 9.52216 16.6616 9.08437 16.9058 8.75875L17.1365 8.4512C17.4351 8.05308 17.3955 7.49599 17.0436 7.1441L16.8559 6.95642C16.504 6.60453 15.9469 6.56494 15.5488 6.86353L15.2412 7.09419C14.9156 7.33841 14.4778 7.3524 14.105 7.18905C14.0498 7.16484 13.994 7.14156 13.9378 7.11922C13.5597 6.96897 13.2618 6.64815 13.2062 6.24511L13.1191 5.61336Z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12Z"
                ></path>
              </svg>
            </div>
            <Link
              to=""
              className="inline-block w-full py-2 pl-10 pr-4 text-base rounded hover:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-neutral-900"
            >
              Soporte
            </Link>
          </li>

          <li className="relative text-gray-300 hover:text-white focus-within:text-white">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <button onClick={showNoti}>
                <VscBellDot className="text-base" />
              </button>
            </div>
            <Link
              to=""
              className="inline-block w-full h-full py-2 pl-9 pr-4 text-base rounded hover:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-neutral-900"
            >
              notification
            </Link>
          </li>
        </ul>
      </div>
      <ModalNotificacion noti={noti} setNoti={setNoti} />
    </SidebarNav>
  );
};
