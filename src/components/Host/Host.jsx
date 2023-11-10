import React from "react";
import { NavLink,Outlet } from "react-router-dom";

export default function Host(){
    const activeStyle = {
        color:'text-activeLink',
        underline: 'underline',
        weight: 'font-bold',
    }
    const completeStyle = activeStyle.color+' '+activeStyle.underline+' '+activeStyle.weight
 
    return(<>
    <div className="min-h-screen-fit px-7 flex flex-col gap-5 bg-cream-bg">
        <div className="flex gap-10 underline mt-10 ">
            <NavLink to='/host'
            end
            className={({isActive}) => isActive ? completeStyle : ''}
            >Dashboard</NavLink>
            <NavLink to='income'
            className={({isActive}) => isActive ? completeStyle : ''}
            >Income</NavLink>
            <NavLink to='vans'
            className={({isActive}) => isActive ? completeStyle : ''}
            >Vans</NavLink>
            <NavLink to='reviews'
            className={({isActive}) => isActive ? completeStyle : ''}
            >Reviews</NavLink>
        </div>
        <Outlet />
    </div>
    </>)
}