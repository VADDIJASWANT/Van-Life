import { useState,useEffect } from "react";
import React from "react";
import { NavLink, Outlet, useOutletContext} from "react-router-dom";

import { useParams } from "react-router-dom";

export default function HostVanInfo(){
    const params = useParams()
    const id = params.id
    const [HostVan,setHostVan] = useState([])
    useEffect(()=>{
        fetch(`/api/vans/${id}`)
        .then((res) => res.json())
        .then((data) => setHostVan(data.vans))
    },[])
    const btnStyle={
        'backgroundColor': HostVan.type == 'simple' ? '#E17654' : HostVan.type == 'rugged' ? '#115E59' : '#161616'
    }
    const activeLink = 'text-activeLink font-bold underline'

    return(
        <>
           <div className="flex flex-col gap-10 mt-5 p-7" >
                <NavLink to='..'
                relative="path"
                className='underline' >Back to all vans</NavLink>
                <div className="bg-white p-5 flex gap-5 flex-col">
                    <div className="flex gap-5 items-center">
                        <img src={HostVan.imageUrl} className="w-28 h-28 rounded" />
                        <div className="flex justify-between h-28 flex-col">
                            <button style={btnStyle} className="text-left rounded w-fit text-white py-1 px-4">
                                {HostVan.type}
                            </button>
                            <h1 className="text-2xl font-bold">
                                {HostVan.name}
                            </h1>
                            <span><span className="font-bold">${HostVan.price}</span>/day</span>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <NavLink end to='.'
                        className={({isActive}) => isActive ? activeLink : ''}
                        >Details</NavLink>
                        <NavLink to='pricing'
                        className={({isActive}) => isActive ? activeLink : ''}
                        >Pricing</NavLink>
                        <NavLink to='photos'
                        className={({isActive}) => isActive ? activeLink : ''}
                        >Photos</NavLink>
                    </div>
                    <div>
                        <Outlet context={[HostVan,setHostVan]} />
                    </div>
                </div>
           </div>
        </>
    )
}