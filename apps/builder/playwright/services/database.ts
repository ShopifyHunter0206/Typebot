import {
  Block,
  CredentialsType,
  defaultSettings,
  defaultTheme,
  PublicBlock,
  PublicTypebot,
  Step,
  Typebot,
} from 'models'
import { DashboardFolder, PrismaClient, User } from 'db'
import { readFileSync } from 'fs'
import { encrypt } from 'utils'

const prisma = new PrismaClient()

export const teardownDatabase = async () => {
  await prisma.credentials.deleteMany()
  await prisma.dashboardFolder.deleteMany()
  return prisma.typebot.deleteMany()
}

export const setupDatabase = async (userEmail: string) => {
  const createdUser = await getSignedInUser(userEmail)
  if (!createdUser) throw new Error("Couldn't find user")
  process.env.PLAYWRIGHT_USER_ID = createdUser.id
  return createCredentials()
}

export const getSignedInUser = (email: string) =>
  prisma.user.findFirst({ where: { email } })

export const createTypebots = async (partialTypebots: Partial<Typebot>[]) => {
  await prisma.typebot.createMany({
    data: partialTypebots.map(parseTestTypebot) as any[],
  })
  return prisma.publicTypebot.createMany({
    data: partialTypebots.map((t) =>
      parseTypebotToPublicTypebot(t.id + '-public', parseTestTypebot(t))
    ) as any[],
  })
}

export const createFolders = (partialFolders: Partial<DashboardFolder>[]) =>
  prisma.dashboardFolder.createMany({
    data: partialFolders.map((folder) => ({
      ownerId: process.env.PLAYWRIGHT_USER_ID as string,
      name: 'Folder #1',
      ...folder,
    })),
  })

const createCredentials = () => {
  const { encryptedData, iv } = encrypt({
    expiry_date: 1642441058842,
    access_token:
      'ya29.A0ARrdaM--PV_87ebjywDJpXKb77NBFJl16meVUapYdfNv6W6ZzqqC47fNaPaRjbDbOIIcp6f49cMaX5ndK9TAFnKwlVqz3nrK9nLKqgyDIhYsIq47smcAIZkK56SWPx3X3DwAFqRu2UPojpd2upWwo-3uJrod',
    // This token is linked to a mock Google account (typebot.test.user@gmail.com)
    refresh_token:
      '1//0379tIHBxszeXCgYIARAAGAMSNwF-L9Ir0zhkzhblwXqn3_jYqRP3pajcUpqkjRU3fKZZ_eQakOa28amUHSQ-Q9fMzk89MpRTvkc',
  })
  return prisma.credentials.createMany({
    data: [
      {
        name: 'test2@gmail.com',
        ownerId: process.env.PLAYWRIGHT_USER_ID as string,
        type: CredentialsType.GOOGLE_SHEETS,
        data: encryptedData,
        iv,
      },
    ],
  })
}

export const updateUser = (data: Partial<User>) =>
  prisma.user.update({
    data,
    where: { id: process.env.PLAYWRIGHT_USER_ID as string },
  })

export const createResults = async ({ typebotId }: { typebotId: string }) => {
  await prisma.result.createMany({
    data: [
      ...Array.from(Array(200)).map((_, idx) => {
        const today = new Date()
        return {
          id: `result${idx}`,
          typebotId,
          createdAt: new Date(
            today.setTime(today.getTime() + 1000 * 60 * 60 * 24 * idx)
          ),
          isCompleted: false,
        }
      }),
    ],
  })
  return createAnswers()
}

const createAnswers = () => {
  return prisma.answer.createMany({
    data: [
      ...Array.from(Array(200)).map((_, idx) => ({
        resultId: `result${idx}`,
        content: `content${idx}`,
        stepId: 'step1',
        blockId: 'block1',
      })),
    ],
  })
}

const parseTypebotToPublicTypebot = (
  id: string,
  typebot: Typebot
): PublicTypebot => ({
  id,
  name: typebot.name,
  blocks: parseBlocksToPublicBlocks(typebot.blocks),
  typebotId: typebot.id,
  theme: typebot.theme,
  settings: typebot.settings,
  publicId: typebot.publicId,
  variables: typebot.variables,
  edges: typebot.edges,
})

const parseBlocksToPublicBlocks = (blocks: Block[]): PublicBlock[] =>
  blocks.map((b) => ({
    ...b,
    steps: b.steps.map((s) =>
      'webhook' in s ? { ...s, webhook: s.webhook.id } : s
    ),
  }))

const parseTestTypebot = (partialTypebot: Partial<Typebot>): Typebot => ({
  id: partialTypebot.id ?? 'typebot',
  folderId: null,
  name: 'My typebot',
  ownerId: process.env.PLAYWRIGHT_USER_ID as string,
  theme: defaultTheme,
  settings: defaultSettings,
  createdAt: new Date(),
  publicId: null,
  publishedTypebotId: null,
  updatedAt: new Date(),
  variables: [],
  ...partialTypebot,
  edges: [
    {
      id: 'edge1',
      from: { blockId: 'block0', stepId: 'step0' },
      to: { blockId: 'block1' },
    },
  ],
  blocks: [
    {
      id: 'block0',
      title: 'Block #0',
      steps: [
        {
          id: 'step0',
          type: 'start',
          blockId: 'block0',
          label: 'Start',
          outgoingEdgeId: 'edge1',
        },
      ],
      graphCoordinates: { x: 0, y: 0 },
    },
    ...(partialTypebot.blocks ?? []),
  ],
})

export const parseDefaultBlockWithStep = (
  step: Partial<Step>
): Pick<Typebot, 'blocks'> => ({
  blocks: [
    {
      graphCoordinates: { x: 200, y: 200 },
      id: 'block1',
      steps: [
        {
          id: 'step1',
          blockId: 'block1',
          ...step,
        } as Step,
      ],
      title: 'Block #1',
    },
  ],
})

export const importTypebotInDatabase = (
  path: string,
  updates?: Partial<Typebot>
) => {
  const typebot: any = {
    ...JSON.parse(readFileSync(path).toString()),
    ...updates,
    ownerId: process.env.PLAYWRIGHT_USER_ID,
  }
  return prisma.typebot.create({
    data: typebot,
  })
}
