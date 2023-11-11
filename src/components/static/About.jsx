import React from "react";
import aboutImage from '/src/assets/about.png';
export default function About(){
    return(
        <div className="flex bg-cream-bg gap-7 flex-col justify-between items-center w-full min-h-screen-fit">
            <img src={aboutImage} className="w-full max-w-lg h-48" />
            <h2 className="font-bold w-4/5 text-xl  ">Don't squeeze in a sedan when you could relax in a van.</h2>
            <p className="w-4/5">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) <br /><br /> Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className="flex w-4/5 mb-6 flex-col gap-5 p-6 rounded-2xl bg-orange-300 justify-between">
                <p className="font-bold text-xl">Your destination is waiting. Your van is ready.</p>
                <button className="bg-black font-bold text-white rounded-xl w-fit p-5">Explore our vans</button>
            </div>
        </div>
    )
}