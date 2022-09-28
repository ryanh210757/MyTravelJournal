import React from "react"

export default function Card(props){
    
    return (
     
        <div id="card">
            <img src={props.item.imageUrl} />
            <div id="text">
                <h2><img src="/Fill219.png"/>{props.item.location} <a href={props.item.googleMapsUrl}>View on Google Maps</a></h2>
                <h1>{props.item.title}</h1>
                <h3>{props.item.startDate} - {props.item.endDate}</h3>
                <p>{props.item.description}</p>
            </div>
           
            <p className="underline"></p>
        
        </div>
       
    )
    
}