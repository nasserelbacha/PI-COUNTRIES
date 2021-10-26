import React from "react";

export default function Card({name, imagen, continent}) {
    return(
        <div>
            <h4> {name} </h4>
            <h6> {continent} </h6>
            <img src={imagen} alt="imagen no encontrada" width='150px' height='200' />
        </div>
    )
}