import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemsSubMenu from "./ItemsSubMenu";

const ItemsMenu = ({ item, sidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <li className="" key={item.key} onClick={item.subNav && showSubnav}>
        <div
          className={`${
            sidebar ? "h-10 w-full" : ""
          } flex justify-between text-gray-300  cursor-pointer rounded hover:bg-neutral-900 hover:text-white `}
        >
          <div className="flex items-center w-full">
            <div className=" flex items-center pl-2 pointer-events-none ">
              <span className="w-5 h-5" style={{ fontSize: `19px` }}>
                {item.icon}
              </span>
            </div>
            <Link
              to={item.path}
              className={`${
                sidebar ? "hidden" : ""
              } inline-block w-full py-2 pl-8 pr-4 text-sm`}
            >
              {item.title}
            </Link>
          </div>
          <button
            className={`${
              sidebar ? "hidden" : ""
            } flex justify-center items-center mt-1 pr-4 `}
            tabIndex="-1"
          >
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </button>
        </div>
      </li>
      {subnav &&
        item.subNav.map((item, index) => {
          return <ItemsSubMenu to={item.path} key={index} title={item.title} />;
        })}
    </>
  );
};

export default ItemsMenu;
