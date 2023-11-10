import React from "react";

export default function Home(){
    return(
        <div className="bg-home-bg-img text-white flex flex-col items-center justify-around gap-5 bg-cover bg-center min-h-screen-fit w-full">
            <h2 className=" w-2/3 text-3xl font-bold">
                You got the travel plans, we got the travel vans.
            </h2>
            <p className="w-2/3 text-xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <button className="rounded text-2xl font-bold bg-orange-400 py-4 w-2/3 px-10">Find Your Van</button>
        </div>
    )
}