// Do not edit this file manually
import { parseBlockCredentials, parseBlockSchema } from '@typebot.io/forge'
import { groqBlock } from '.'
import { auth } from './auth'

export const groqBlockSchema = parseBlockSchema(groqBlock)
export const groqCredentialsSchema = parseBlockCredentials(
  groqBlock.id,
  auth.schema
)
