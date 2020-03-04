import React, { useState } from "react"


const ExoUn = () => {
    const [titre, setTitre] = useState({
        titre: "Titre",
        class: "text-center bg-secondary",
    })
    const changerTitre = () => {
        return (
            setTitre({
                titre: "Modifier Titre",
                class: "text-center text-white bg-danger"
            })
        )
    }
    const changerTitre2 = () => { 
        return (
            setTitre ({
                titre: "Titre Pepone",
                class: "text-center bg-danger text-success"
            })
        )
    }
    return (
        <div className="container">
        
            <h1 className={titre.class}>
                {titre.titre}
            </h1>
            <div className="d-flex justify-content-center" >
        <button className="btn-warning btn-outline-warning btn text-danger mt-3"  onClick={titre.class === "bg-danger test-center" ? changerTitre:changerTitre2} >
            Changer de Titre
        </button>
        </div>

        <div className='container bg-secondary p-5 mt-3' >
               <p>list de proriété et méthode a retrouver dans la documentation</p> 
            <ul>
            <li>innerText</li>
            <li>InnerHtml</li>
            <li>querySelector()</li>
            <li>querySelectorAll()</li>
            <li>style</li>
            <li>classList</li>
            </ul>
            <p>
                Changer le contenue du h2 par "le titre modifié"
                <br/>
                changer la couleur du h2 (la couleur que vous voulez)
                <br/>
                Ajouter une class background bootstrap au h2
            </p>

        </div>
        </div>
    )
}

export default ExoUn;