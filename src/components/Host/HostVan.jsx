import React from "react";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function HostVan(){
    const [HostVanDetails, setHostVanDetails] = useState([])

    useEffect(()=>{
        fetch('/api/vans')
        .then((res) => res.json())
        .then((data) => setHostVanDetails(data.vans))
    },[])

    const hostVanHtml = HostVanDetails.map((item) => {
        return(
            <NavLink to={`${item.id}`} >
                <div className="bg-white gap-5 rounded flex items-center w-full py-2 px-3">
                    <img src={item.imageUrl} className="w-20 h-20" />
                    <div className="flex flex-col">
                        <h5 className="font-bold">{item.name}</h5>
                        <p className="opacity-50">{item.price}/day</p>
                    </div>
                </div>
            </NavLink>
        )
    })

    return(
        <>
            <div className="flex flex-col gap-5 py-7 px-7 mt-5">
                <h1 className="font-bold text-3xl">Your Listed Vans</h1>
                {hostVanHtml}
            </div>
        </>
    )
}