import React from "react";  
import { useOutletContext } from "react-router-dom";
export default function VanPhotos(){
    const [HostVan,setHostVan] = useOutletContext()
    return(<>
        <div className="mt-5">
            <img src={HostVan.imageUrl} className="w-36 h-36 rounded" />
        </div>
    </>)
}