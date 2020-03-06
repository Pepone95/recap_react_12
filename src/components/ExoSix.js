import React, {useState} from 'react'


const ExoSix = () => {
    var [value, setValue] = useState("")
    var [bouton, setBouton] = useState("")
    var copier = (e) => {
        value = e.target.value
            setBouton(value)
        }
        var un = () => {
                setBouton(bouton + "1")
                
            }
            var quatre = () => {
                setBouton(bouton + "4")
                
            }
            var sept = () => {
                setBouton(bouton + "7")
                
            }
            var deux = () => {
                setBouton(bouton + "2")
                
            }
            var cinq = () => {
                setBouton(bouton + "5")
                
            }
            var white = () => {
                setBouton(bouton + "8")
                
            }
            var zero = () => {
                setBouton(bouton + "0")
            
            }
        var trois = () => {
            setBouton(bouton + "3")
            
        }
        var six = () => {
            setBouton(bouton + "6")
            
        }
        var neuf = () => {
            setBouton(bouton + "9")
            
        }
        var c = () => {
            setBouton("")
        }
        var plus = () => {
            setBouton(bouton + "+")
            
        }
        var moin = () => {
            setBouton(bouton + "-")
            
        }
        var fois = () => {
            setBouton(bouton + "*")
        }
        var diviser = () => {
            setBouton(bouton + "/")
        }
        // Le resultat !
        let resultat = ()=>{
            setBouton(eval(bouton))
        }
        // La partie 1
        return (
        
            <div className="container mt-5">
                <h2 className="text-center mt-5 text-danger display-4">Création Calculatrice</h2>
                <h3 className="text-center mt-5">Niveau 1</h3>
                <input style={{ marginLeft: 350 }} type="text" />
                <span> + </span>
                <input type="text" />
                <button className='ml-2'>=</button>
                <span ></span>

<hr/>

    {/**********************************************************************/}
           
                <h3 className="text-center mt-5 text-success">Niveau 2</h3>
                <div className="container bg-success py-3" style={{ width: 250 }}>
                    <input value={bouton} onChange={copier} type="text" /> <span></span>
                    <hr />
                    <div className="row mt-2">
                        <div className="col-0.5 ml-4">
                            <button onClick={un} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>1</button><br />
                            <button onClick={quatre} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>4</button><br />
                            <button onClick={sept} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>7</button><br />
                            <button onClick={c} className="p-2 m-2 bg-danger text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>C</button><br />
                        </div>
                        <div className="col-0.5">
                            <button onClick={deux} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>2</button><br />
                            <button onClick={cinq} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>5</button><br />
                            <button onClick={white} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>8</button><br />
                            <button onClick={zero} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>0</button><br />
                        </div>
                        <div className="col-0.5">
                            <button onClick={trois} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>3</button><br />
                            <button onClick={six} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>6</button><br />
                            <button onClick={neuf} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>9</button><br />
                            <button onClick={resultat} className="p-2 m-2 bg-primary text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>=</button><br />
                        </div>
                        <div className="col-0.5">
                            <button onClick={plus} className="p-2 m-2 bg-primary text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>+</button><br />
                            <button onClick={moin} className="p-2 m-2 bg-primary text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>-</button><br />
                            <button onClick={fois} className="p-2 m-2 bg-primary text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>*</button><br />
                            <button onClick={diviser} className="p-2 m-2 bg-primary text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>/</button><br />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default ExoSix;