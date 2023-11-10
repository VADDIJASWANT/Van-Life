import {React, useEffect, useState} from "react";
import VanCard from './vancard';
export default function Vans(props){
    const [vans,setVans] = useState([]);
    useEffect(() => {
        fetch('/api/vans')
        .then((res) => res.json())
        .then((data) => {
            setVans(data.vans)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },[])
    const vanHTML = vans.map((item) => {
        return(
            <>
                <VanCard key={item.id} {...item} />
            </>
        )
    })
    return(
        <div className="bg-cream-bg flex min-h-screen-fit px-5 gap-5 flex-col">
            <h2 className="text-xl mt-10 font-bold">Explore our van options</h2>
            <div className=" flex justify-between items-center">
                <button className="rounded bg-orange-100 w-fit py-2 px-6">Simple</button>
                <button className="rounded bg-orange-100 w-fit py-2 px-6">Luxury</button>
                <button className="rounded bg-orange-100 w-fit py-2 px-6">Rigged</button>
                <p className="underline">Clear Filters</p>
            </div>
            <div className="flex flex-wrap justify-between gap-5 mb-10">
                {vanHTML}
            </div>
        </div>
    )
}