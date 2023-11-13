import {React, useEffect, useState} from "react";
import { NavLink, useSearchParams,useLoaderData } from "react-router-dom";
import VanCard from './vancard';
import loadingVans from "../../api";

export async function loader(){
    return loadingVans()
}

export default function Vans(props){
    const vans = useLoaderData()
    // console.log(data);
    // const [vans,setVans] = useState([]);
    const [searchParams, setSearchparams] = useSearchParams();
    const Searchtype = searchParams.get('type');
    // const [loading,setLoading] = useState(false);
    // useEffect(() => {
    //     async function gettingVans(){
    //         setLoading(true)
    //         const data = await loadingVans();
    //         setVans(data);
    //         setLoading(false)
    //     }
    //     gettingVans()
    // },[])

    const DisplayVans = Searchtype ?
            vans.filter((van) => van.type.toLowerCase() === Searchtype.toLowerCase() )
            : vans;
    
    const vanHTML = DisplayVans.map((item) => {
        return(
            <>
                <VanCard key={item.id} {...item} filter={searchParams.toString()} filterType={Searchtype ? Searchtype : 'all'} />
            </>
        )
    })

    // if(loading){
    //     return(
    //         <h1>Loading</h1>
    //     )
    // }
    
    return(
        <div className="bg-cream-bg flex min-h-screen-fit px-5 gap-5 flex-col">
            <h2 className="text-xl mt-10 font-bold">Explore our van options</h2>
            <div className=" flex gap-5 flex-wrap items-center">
                
                <button onClick={() => setSearchparams({type:'simple'})} className="rounded bg-orange-100 hover:bg-orange-400 hover:text-white w-fit py-2 px-6">
                    Simple
                </button>
                <button onClick={() => setSearchparams({type:'luxury'})} className="rounded bg-orange-100  hover:bg-black hover:text-white  w-fit py-2 px-6">
                    Luxury
                </button>
                <button onClick={() => setSearchparams({type:'rugged'})} className="rounded bg-orange-100 hover:bg-green-700 hover:text-white w-fit py-2 px-6">
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