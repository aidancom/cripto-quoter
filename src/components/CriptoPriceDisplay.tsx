import { useCriptoStore } from "../store"
import Spinner from "./Spinner"

const CriptoPriceDisplay = () => {

  const dataCurrency = useCriptoStore((state) => state.dataCurrency) 
  const loading = useCriptoStore((state) => state.loading)

  return (
    <div className="result-wrapper">
      {loading ? (
        <Spinner/>
      ) : (
        <>
        <h2>Cotización</h2>
        <div className="result">
          <img src={`https://cryptocompare.com/${dataCurrency.IMAGEURL}`} alt="Imagen criptomoneda" />
          <div>
            <p>El precio es de: <span>{dataCurrency.PRICE}</span></p>
            <p>Precio más alto del día: <span>{dataCurrency.HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span>{dataCurrency.LOWDAY}</span></p>
            <p>Variación 24 horas: <span>{dataCurrency.CHANGEPCT24HOUR}</span></p>
            <p>Última actualización: <span>{dataCurrency.LASTUPDATE}</span></p>
          </div>
        </div>
        </>
      )}

    </div>
  )
}

export default CriptoPriceDisplay
