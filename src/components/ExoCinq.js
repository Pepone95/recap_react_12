import React, {useState} from 'react'

const ExoCinq = () => {
    const [img, setImg] = useState([<img className="w-25" src="./img/egg_.png" alt=""/>])

    const image = () => {
        let copieImg = [...img]
        let copieImg2 = [...img]
        copieImg.push(img[0])
        copieImg2.push(img[0])
        setImg(copieImg)
        if (copieImg.length === 0) {
            setImg(copieImg2)
        }
    }

    const suppImage = () => { 
        let copie = [...img] 
        let copie2 = [...img] 
        copie.pop() 
        copie2.push(img[0]) 
        setImg(copie) 
        if (copie.length === 0) { 
            setImg(img) 
        }
    }

    const suppAll = () => {
        let supp = [...img]
        let fill = [...img]
        fill.push(img[0])
        supp.splice(0, img.length-1)
        setImg(supp)
        if (supp.length === 0) {
            setImg(fill)
        }
    }

    return (
        <div className="container bg-secondary p-5 text-center" >
            <h1>
                Générer des éléments du DOM
            </h1>
            <p>
                Cliquer sur le bouton ci-dessous pour générer des oeufs.
            </p>
            <br/>
          
            <div className="row d-flex justify-content-center" >
                <button className="btn btn-success btn-outline-light" onClick={image} >
                    Ajouter: +1
                </button>
                <button className="btn btn-warning btn-outline-light ml-2" onClick={suppImage} > 
                        Supprimer -1
                </button>
                <button className="btn btn-danger btn-outline-light ml-2" onClick={suppAll} >
                    Supprimer All
                </button>
            </div>

            <hr/>
            <div className="row">
                {img}
            </div>
        </div>
    )

}

export default ExoCinq;