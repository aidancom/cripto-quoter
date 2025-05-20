import z from 'zod'
import { CurrencySchema, CriptoSchemaResponseSchema, CriptoSchema, CriptoPriceSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CriptoCurrency = z.infer<typeof CriptoSchemaResponseSchema>
export type Pair = z.infer<typeof CriptoSchema>
export type CriptoPrice = z.infer<typeof CriptoPriceSchema>
