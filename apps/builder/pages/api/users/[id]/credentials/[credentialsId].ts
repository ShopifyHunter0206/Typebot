import { withSentry } from '@sentry/nextjs'
import { User } from 'db'
import prisma from 'libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { methodNotAllowed } from 'utils'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (!session?.user)
    return res.status(401).json({ message: 'Not authenticated' })

  const user = session.user as User
  const id = req.query.id.toString()
  if (user.id !== id) return res.status(401).send({ message: 'Forbidden' })
  if (req.method === 'DELETE') {
    const credentialsId = req.query.credentialsId.toString()
    const credentials = await prisma.credentials.delete({
      where: { id: credentialsId },
    })
    return res.send({ credentials })
  }
  return methodNotAllowed(res)
}

export default withSentry(handler)
