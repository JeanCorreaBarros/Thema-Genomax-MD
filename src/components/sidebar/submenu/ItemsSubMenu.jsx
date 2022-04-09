import React from 'react';
import {Link }from 'react-router-dom'

const ItemsSubMenu = (props) => {
  return (
    <div className="pt-2 pl-4">
        <ul className="flex flex-col pl-2 text-gray-300 border-l border-gray-300">
            <li>
                <Link to={props.to} className="inline-block w-full px-4 py-2 text-sm rounded hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 ">
                        {props.title}
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default ItemsSubMenu