import React from "react"

export default function ItemListContainer ({saludo,saludar,call }) {
    return (
<div className ="container-style"> 
        <h1 className = "container-item" onClick ={call}> Salad Clo. {saludo}</h1>
        </div>
    )
}


