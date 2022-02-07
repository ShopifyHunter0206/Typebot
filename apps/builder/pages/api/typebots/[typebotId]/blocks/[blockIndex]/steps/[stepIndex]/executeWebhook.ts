import prisma from 'libs/prisma'
import { KeyValue, Typebot, Variable, Webhook, WebhookResponse } from 'models'
import { parseVariables } from 'bot-engine'
import { NextApiRequest, NextApiResponse } from 'next'
import got, { Method, Headers, HTTPError } from 'got'
import { methodNotAllowed } from 'utils'
import { stringify } from 'qs'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const typebotId = req.query.typebotId.toString()
    const blockIndex = Number(req.query.blockIndex)
    const stepIndex = Number(req.query.stepIndex)
    const variables = JSON.parse(req.body).variables as Variable[]
    const typebot = await prisma.typebot.findUnique({
      where: { id: typebotId },
    })
    const step = (typebot as unknown as Typebot).blocks[blockIndex].steps[
      stepIndex
    ]
    if (!('webhook' in step))
      return {
        statusCode: 400,
        data: { message: `Couldn't find webhook` },
      }
    const result = await executeWebhook(step.webhook, variables)
    return res.status(200).send(result)
  }
  return methodNotAllowed(res)
}

const executeWebhook = async (
  webhook: Webhook,
  variables: Variable[]
): Promise<WebhookResponse> => {
  if (!webhook.url || !webhook.method)
    return {
      statusCode: 400,
      data: { message: `Webhook doesn't have url or method` },
    }
  const headers = convertKeyValueTableToObject(webhook.headers, variables) as
    | Headers
    | undefined
  const queryParams = stringify(
    convertKeyValueTableToObject(webhook.queryParams, variables)
  )
  const contentType = headers ? headers['Content-Type'] : undefined
  try {
    const response = await got(
      parseVariables(variables)(webhook.url + `?${queryParams}`),
      {
        method: webhook.method as Method,
        headers,
        json:
          contentType !== 'x-www-form-urlencoded' && webhook.body
            ? JSON.parse(parseVariables(variables)(webhook.body))
            : undefined,
        form:
          contentType === 'x-www-form-urlencoded' && webhook.body
            ? JSON.parse(parseVariables(variables)(webhook.body))
            : undefined,
      }
    )
    return {
      statusCode: response.statusCode,
      data: parseBody(response.body),
    }
  } catch (error) {
    if (error instanceof HTTPError) {
      return {
        statusCode: error.response.statusCode,
        data: parseBody(error.response.body as string),
      }
    }
    return {
      statusCode: 500,
      data: { message: `Error from Typebot server: ${error}` },
    }
  }
}

const parseBody = (body: string) => {
  try {
    return JSON.parse(body)
  } catch (err) {
    return body
  }
}

const convertKeyValueTableToObject = (
  keyValues: KeyValue[] | undefined,
  variables: Variable[]
) => {
  if (!keyValues) return
  return keyValues.reduce((object, item) => {
    if (!item.key) return {}
    return {
      ...object,
      [item.key]: parseVariables(variables)(item.value ?? ''),
    }
  }, {})
}

export default handler
