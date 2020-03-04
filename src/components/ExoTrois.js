import React, {useState} from 'react'

const ExoTrois = () => {

    let [input, setInput] = useState("Inconnu")

    let [value, setValue] = useState("")
        
    let inputChange = (e) => {
        value = e.target.value
        setValue(value)
    }

    let validBtn = () => {
        input=value
        setInput(input)
    }

    return(
        <div  className='container bg-secondary p-5'>
            <h2 className='text-danger display-4' >
                Welcome, {input}
            </h2>
            <p>
                écriver dans l'input ci-dessous le nom de la personne que vous voulez accueillir
                <br/>
                losque vous cliquer sur le bouton "go" le nom que vous avez ajouter dans l'input sera alors mis dans le span du h2 et l'input sera alors vide de 
                <br/>
                toute contenue. Attention, interdiction de toucher a l'html
            </p>
            <div className='row' >
                <input type="text" placeholder='Rajoute ton Prénom' onChange={inputChange} />
            <button className='btn btn-success' onClick={validBtn}  >
                Validé
            </button>
            </div>
        </div>
    )
}


export default ExoTrois;