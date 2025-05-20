import {z} from 'zod'

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string()
})

export const CriptoSchemaResponseSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string()
  })
})

export const CriptoSchema = z.object({
  currency: z.string(),
  criptoCurrency: z.string()
})

export const CriptoPriceSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string()
})

export const CriptoCurrenciesSchemaResponseSchema = z.array(CriptoSchemaResponseSchema)


