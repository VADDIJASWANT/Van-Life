import React from "react";  
import { useLocation, useOutletContext } from "react-router-dom";
import HostVan from "../HostVan";

export default function VanDetails(){
    const [HostVan,setHostVan] = useOutletContext()
    return(<>
        <div className="flex flex-col gap-5">
            <p>
                <span className="font-bold">Name: </span>
                {HostVan.name}
            </p>
            <p>
                <span className="font-bold">Category: </span>
                {HostVan.type}
            </p>
            <p>
                <span className="font-bold">Description: </span>
                {HostVan.description}
            </p>
            <p>
                <span className="font-bold">Visibility: </span>
                public
            </p>
        </div>
    </>)
}