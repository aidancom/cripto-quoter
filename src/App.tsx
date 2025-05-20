import CriptoSearchFrom from "./components/CriptoSearchFrom"
import { useEffect } from "react"
import { useCriptoStore } from "./store"
import CriptoPriceDisplay from "./components/CriptoPriceDisplay"

function App() {

  const fetchCriptos = useCriptoStore((state) => state.fetchCriptos)
  const dataCurrency = useCriptoStore((state) => state.dataCurrency)
  useEffect(() => {
    fetchCriptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchFrom/>
          {!Object.values(dataCurrency).includes('') && <CriptoPriceDisplay/>}
        </div>
      </div>
    </>
  )
}

export default App
