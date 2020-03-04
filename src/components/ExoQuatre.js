import React, { useState } from 'react'

const ExoQuatre = () => {
    const [display, setDisplay] = useState({
        bRouge1: "bg-danger blocRouge col-4 ml-3 d-none",
        bRouge2: "bg-danger blocRouge col-4 ml-3 d-block",
        value: 0
    })
    let changer = () => {
        return (
            setDisplay({
                bRouge1: "bg-danger blocRouge col-4 ml-2 d-block",
                bRouge2: "bg-danger blocRouge col-4 ml-2 d-none",
                value: display.value + 1
            })
        )
    }
    let changer2 = () => {
        return (
            setDisplay({
                bRouge1: "bg-danger blocRouge col-4 ml-3 d-none",
                bRouge2: "bg-danger blocRouge col-4 ml-3 d-block",
                value: display.value + 1
            })
        )
    }
    return (
        <div className='container' >
            <h1 className='text-center'>
                Déplacer les éléments
            </h1>
            <div className='row d-flex justify-content-center'>
                <div className='divblue col-4 bg-primary p-5'>
                    <br/>
                    <div className={display.bRouge1}>
                        <br/>
                    </div>
                    <br/>           
                </div>
                <div className='divblue2 col-4 bg-primary ml-3'>
                    <br/>
                    
                    <div className={display.bRouge2}>
                    <br/>

                    </div>
                    <br/>
                </div>
            </div>
            <div className='row d-flex justify-content-center mt-5'>
                <button className='btn btn-lg btn-primary' onClick={display.bRouge2 === "bRouge bg-danger col-4 ml-3 d-block" ? changer:changer2}>Changer</button>
                <button className='btn btn-lg btn-warning' >Vous avez cliqué {display.value} </button>
            </div>

        </div>
    )
}


export default ExoQuatre;