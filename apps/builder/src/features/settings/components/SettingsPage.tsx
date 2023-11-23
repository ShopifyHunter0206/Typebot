import { Seo } from '@/components/Seo'
import { Flex } from '@chakra-ui/react'
import { Standard } from '@typebot.io/nextjs'
import { getViewerUrl } from '@typebot.io/lib/getViewerUrl'
import { SettingsSideMenu } from './SettingsSideMenu'
import { TypebotHeader } from '@/features/editor/components/TypebotHeader'
import { useTypebot } from '@/features/editor/providers/TypebotProvider'
import { TypebotNotFoundPage } from '@/features/editor/components/TypebotNotFoundPage'

export const SettingsPage = () => {
  const { typebot, is404 } = useTypebot()

  if (is404) return <TypebotNotFoundPage />
  return (
    <Flex overflow="hidden" h="100vh" flexDir="column">
      <Seo title={typebot?.name ? `${typebot.name} | Settings` : 'Settings'} />
      <TypebotHeader />
      <Flex h="full" w="full">
        <SettingsSideMenu />
        <Flex flex="1">
          {typebot && <Standard apiHost={getViewerUrl()} typebot={typebot} />}
        </Flex>
      </Flex>
    </Flex>
  )
}
