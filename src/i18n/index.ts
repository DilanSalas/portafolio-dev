import es from './es.json'
import en from './en.json'

export type Lang = 'es' | 'en'

const messages = { es, en }

export function t(lang: Lang, key: string) {
  return key.split('.').reduce((obj: any, k) => obj?.[k], messages[lang])
}
