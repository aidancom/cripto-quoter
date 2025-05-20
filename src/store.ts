import { create } from "zustand"
import axios from "axios"
import { CriptoCurrenciesSchemaResponseSchema, CriptoPriceSchema } from "./schema/crypto-schema"
import type { CriptoCurrency, CriptoPrice, Pair } from "./types"

type CriptoStore = {
  criptoCurrencies: CriptoCurrency[],
  dataCurrency: CriptoPrice,
  loading: boolean,
  fetchCriptos: () => Promise<void>,
  fetchData: (pair: Pair) => Promise<void>,

}

async function getCriptos() {
  const {data: {Data}} = await axios('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD')
  const result = CriptoCurrenciesSchemaResponseSchema.safeParse(Data)
  if (result.success) return result.data
}

export const useCriptoStore = create<CriptoStore>((set) => ({
  criptoCurrencies: [],
  dataCurrency: {
      IMAGEURL:'',
      PRICE: '',
      HIGHDAY: '',
      LOWDAY: '',
      CHANGEPCT24HOUR: '',
      LASTUPDATE: ''
  },
  loading: false,
  fetchCriptos: async () => {
    const criptoCurrencies = await getCriptos()
    set(() => ({
      criptoCurrencies
    }))
  },
  fetchData: async (pair) => {
    set(() => ({
      loading: true
    }))
    const {data: {DISPLAY}} = await axios(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptoCurrency}&tsyms=${pair.currency}`)
    const result = CriptoPriceSchema.safeParse(DISPLAY[pair.criptoCurrency][pair.currency])
    set(() => ({
      dataCurrency: result.data,
      loading: false
    }))
  }
}))