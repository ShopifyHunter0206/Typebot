import { withSentry } from '@sentry/nextjs'
import prisma from 'libs/prisma'
import { Result } from 'models'
import { NextApiRequest, NextApiResponse } from 'next'
import { methodNotAllowed } from 'utils'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    const data = JSON.parse(req.body) as Result
    const id = req.query.id.toString()
    const result = await prisma.result.update({
      where: { id },
      data,
    })
    return res.send(result)
  }
  return methodNotAllowed(res)
}

export default withSentry(handler)
