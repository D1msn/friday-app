import { DateTime } from 'luxon'

export const formatDate = (date: string, format: string) => DateTime.fromISO(date).toFormat(format)
