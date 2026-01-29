import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

const DettaglioProdottoSingolo = () => {
    // definisco l'id associandolo al prodotto
    const { id } = useParams();
    const [prodotto, setProdotto] = useState()

    const endpoint = "https://fakestoreapi.com/products/";

    useEffect(() => {
        axios.get(`${endpoint}${id}`)
            .then(res => setProdotto(res.data))
            .catch(err => console.log(err, "c'è un errore"))
    }, [id])

    if (!prodotto) {
        return(
            <p>Caricamento...</p>
        )
    }

    return (
        <>
            <h1>pagina dettaglio prodotto</h1>

        
            <h3>{prodotto.title}</h3>
            <img src={prodotto.image} alt={prodotto.title} />
            <p className="prezzo-prodotto">€ {prodotto.price}</p>
            <p>{prodotto.description}</p>
            <p>{prodotto.category}</p>
        </>
    )
}

export default DettaglioProdottoSingolo