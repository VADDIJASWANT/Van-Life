import React from "react";
import { Link }  from 'react-router-dom'
export default function VanCard(props){
    const btnStyle={
        'backgroundColor': props.type == 'simple' ? '#E17654' : props.type == 'rugged' ? '#115E59' : '#161616'
    }
    
    return(
        <Link to={`${props.id}`} state={{search:props.filter, filterType : props.filterType}}>
            <div className="w-56 gap-2 flex flex-col">
                <img className="rounded" src={props.imageUrl} />
                <div className="flex items-start justify-between">
                    <div className="display flex flex-col justify-between gap-2">
                        <p className="font-bold">{props.name}</p>
                        <p style={btnStyle } className="rounded text-white w-fit py-2 px-5">{props.type.slice(0,1).toUpperCase() + props.type.slice(1)}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">${props.price}</p>
                        <p className="text-gray-400 text-sm text-end">/day</p>
                    </div>
                </div>   
            </div>
        </Link>
    )
}