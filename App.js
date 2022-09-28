import React from "react"
import Card from "./components/Card"
import Nav from "./components/Nav"
import data from "./data"

export default function App(){
    console.log(data)
    const newArray = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div>
            <Nav />
            {newArray}
        </div>
    )
}