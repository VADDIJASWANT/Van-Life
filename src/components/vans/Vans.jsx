import {React, useEffect, useState} from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import VanCard from './vancard';
export default function Vans(props){
    const [vans,setVans] = useState([]);
    const [searchParams, setSearchparams] = useSearchParams();
    const Searchtype = searchParams.get('type');
    useEffect(() => {
        fetch('/api/vans')
        .then((res) => res.json())
        .then((data) => {
            let VansData = data.vans;
            setVans(VansData)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },[])

    const DisplayVans = Searchtype ?
            vans.filter((van) => van.type.toLowerCase() === Searchtype.toLowerCase() )
            : vans;
    
    const vanHTML = DisplayVans.map((item) => {
        return(
            <>
                <VanCard key={item.id} {...item} />
            </>
        )
    })


    
    return(
        <div className="bg-cream-bg flex min-h-screen-fit px-5 gap-5 flex-col">
            <h2 className="text-xl mt-10 font-bold">Explore our van options</h2>
            <div className=" flex gap-5 flex-wrap items-center">
                
                <button onClick={() => setSearchparams({type:'simple'})} className="rounded bg-orange-100 hover:bg-orange-400 hover:text-white w-fit py-2 px-6">
                    Simple
                </button>
                <button onClick={() => setSearchparams({type:'luxury'})} className="rounded bg-orange-100 hover:bg-green-700 hover:text-white  w-fit py-2 px-6">
                    Luxury
                </button>
                <button onClick={() => setSearchparams({type:'rugged'})} className="rounded bg-orange-100 hover:bg-black hover:text-white w-fit py-2 px-6">
                    Rigged
                </button>
                { Searchtype ? <p onClick={() => setSearchparams({})} className="underline">Clear Filters</p>: ''}
            </div>
            <div className="flex flex-wrap justify-between gap-5 mb-10">
                {vanHTML}
            </div>
        </div>
    )
}