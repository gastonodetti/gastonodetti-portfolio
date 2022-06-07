import React from "react"
import Me from "../images/my--photo.png"
import "../css/Presentation.css"

export default function Presentation(){
    return (
        <div className="presentation--div">
            <img className="presentation--img" src={Me} />
            <div>
            <h2><b>Un poco sobre mí</b></h2>
            <p>Comencé mi camino como desarrollador a fines del año 2020. En el 2021 
                fui seleccionado y obtuve una beca (sponsoreada por Mercado Libre y Globant) para estudiar en 
                <a href="https://www.digitalhouse.com/ar/acciones/certified-tech-developer" target="_blank">
                    <b> Digital House </b></a> 
                    
                la carrera Certified Tech Developer, en donde actualmente me estoy formando. 
                 <br/><br/>
                Quienes me conocen saben que soy una persona inquieta a la que le encantan los desafíos 
                <br/><br/>
                <b>¡Y siempre estoy abierto a oportunidades!</b>
                
                </p>    
            </div>

        </div>
    )
}