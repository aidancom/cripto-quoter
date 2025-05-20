import { currencies } from "../data"
import { useState } from "react"
import { useCriptoStore } from "../store"
import type { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

const CriptoSearchFrom = () => {

  const criptoCurrencies = useCriptoStore((state) => state.criptoCurrencies)
  const fetchData = useCriptoStore((state) => state.fetchData)
  const initialState = {
    currency: '',
    criptoCurrency: ''
  }
  const [pair, setPair] = useState<Pair>(initialState)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({...pair, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(pair).includes('')) {
      setError(true)
      return
    }
    setError(false)
    fetchData(pair)
  }

  return (
    <form 
      className="form"
      onSubmit={handleSubmit}
    >
      {error && <ErrorMessage>Todos los campos son obligatorios</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda</label>
        <select 
          name="currency" 
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">--- Seleccione ---</option>
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
          </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda</label>
        <select 
          name="criptoCurrency" 
          id="criptocurrency"
          onChange={handleChange}
          value={pair.criptoCurrency}
        >
          <option value="">--- Seleccione ---</option>
          {criptoCurrencies.map(currency => (
            <option key={currency.CoinInfo.FullName} value={currency.CoinInfo.Name}>{currency.CoinInfo.FullName}</option>
          ))}
          </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  )
}

export default CriptoSearchFrom
