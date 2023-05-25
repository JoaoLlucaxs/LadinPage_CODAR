import React from "react";
import ReactPlayer from 'react-player'

export const Detalhes=()=>{
    return(
        <div className="container">
            <div className="cont-1">
               <h1>Vida offline e experiências reais uma proteção às redes sociais</h1>
               <p>já existem pesquisas que evidenciaram fatores de proteção contra os sintomas negativos decorrentes do consumo das redes sociais. Atividades offline, oportunidades com amigos e parentes fora da internet, manter relações de proximidade e ter objetivos e propósitos reais são algumas das posturas que protegem o usuário</p>
            </div>
            <ReactPlayer  width='100%' url ='https://www.youtube.com/watch?v=qopY2FNEmnE'/>
            <ReactPlayer  width='100%' url ='https://www.youtube.com/watch?v=NZaIDMXohrY'/>
            
        </div>
    )
}