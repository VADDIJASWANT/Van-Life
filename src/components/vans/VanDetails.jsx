import {React,useEffect,useState} from "react";
import { useParams,Link } from "react-router-dom";
export default function VanDetails(){
    const params = useParams()
    const id = params.id
    const [vandetails,setvanDetails] = useState([])
    useEffect(() => {
        fetch(`/api/vans/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setvanDetails(data.vans)
        })
    },[])
    const btnStyle={
        'backgroundColor': vandetails.type == 'simple' ? '#E17654' : vandetails.type == 'rugged' ? '#115E59' : '#161616'
    }
    return(
        <div className="bg-cream-bg px-7 flex flex-col">
            <p className="mt-10 ">← <Link to={'/vans'} className="underline">Back to all vans</Link></p>
            <img className="w-full h-3/5 mt-5 rounded" src={vandetails.imageUrl} />
            <p style={btnStyle} className=" mt-5 rounded text-white w-fit py-2 px-5">{vandetails?.type?.slice(0,1).toUpperCase() + vandetails?.type?.slice(1)}</p>
            <p className="text-3xl font-bold mt-5">{vandetails.name}</p>
            <p className="text-xl mt-5"><span className="font-bold">${vandetails.price}</span> /day</p>
            <p className="mt-5">{vandetails.description}</p>
            <button className="w-full mt-5 my-10 rounded text-white bg-orange-400 py-2 text-center" >Rent this van</button>
        </div>
    )
}