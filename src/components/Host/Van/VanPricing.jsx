import React from "react";  
import { useOutletContext } from "react-router-dom";
export default function VanPricing(){
    const [HostVan,setHostVan] = useOutletContext()
    return(<>
        <div className="mt-5">
            <span className="text-4xl opacity-75">${HostVan.price}</span><span>/day</span>
        </div>
    </>)
}