import React from "react";
import { NavLink }  from 'react-router-dom'
export default function Header(){

    const activeStyle = {
        color:'text-activeLink',
        underline: 'underline',
        weight: 'font-bold',
    }
    const completeStyle = activeStyle.color+' '+activeStyle.underline+' '+activeStyle.weight
    return(
        <header className="bg-cream-bg p-2 h-12">
            <div className="flex items-center justify-between">
                <div className=" pl-5 text-2xl text-black font-bold">
                    <NavLink to={'/'}>#VANLIFE</NavLink> 
                </div>
                <div className="flex gap-5 pr-5">
                    <div className="w-1/3 text-gray-600 hover:underline">
                        <NavLink
                          to={'/host'}
                          className={({isActive}) => isActive ? completeStyle : null}
                        >Host</NavLink>
                    </div>
                    <div className="w-1/3 text-gray-600 hover:underline">
                        <NavLink
                         className={({isActive}) => isActive ? completeStyle : null}
                         to={'/about'}>About</NavLink>
                    </div>
                    <div className="w-1/3 text-gray-600 hover:underline">
                        <NavLink
                        className={({isActive}) => isActive ? completeStyle : null}
                         to={'/vans'}>Vans</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}