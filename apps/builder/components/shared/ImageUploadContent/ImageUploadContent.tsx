import { useEffect, useState } from 'react'
import { Button, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import { SearchContextManager } from '@giphy/react-components'
import { UploadButton } from '../buttons/UploadButton'
import { GiphySearch } from './GiphySearch'
import { useTypebot } from 'contexts/TypebotContext'
import { useDebounce } from 'use-debounce'
import { Input } from '../Textbox'

type Props = {
  url?: string
  onSubmit: (url: string) => void
  isGiphyEnabled?: boolean
}

export const ImageUploadContent = ({
  url,
  onSubmit,
  isGiphyEnabled = true,
}: Props) => {
  const [currentTab, setCurrentTab] = useState<'link' | 'upload' | 'giphy'>(
    'upload'
  )

  const handleSubmit = (url: string) => onSubmit(url)
  return (
    <Stack>
      <HStack>
        <Button
          variant={currentTab === 'upload' ? 'solid' : 'ghost'}
          onClick={() => setCurrentTab('upload')}
          size="sm"
        >
          Upload
        </Button>
        <Button
          variant={currentTab === 'link' ? 'solid' : 'ghost'}
          onClick={() => setCurrentTab('link')}
          size="sm"
        >
          Embed link
        </Button>
        {isGiphyEnabled && (
          <Button
            variant={currentTab === 'giphy' ? 'solid' : 'ghost'}
            onClick={() => setCurrentTab('giphy')}
            size="sm"
          >
            Giphy
          </Button>
        )}
      </HStack>

      <BodyContent tab={currentTab} onSubmit={handleSubmit} url={url} />
    </Stack>
  )
}

const BodyContent = ({
  tab,
  url,
  onSubmit,
}: {
  tab: 'upload' | 'link' | 'giphy'
  url?: string
  onSubmit: (url: string) => void
}) => {
  switch (tab) {
    case 'upload':
      return <UploadFileContent onNewUrl={onSubmit} />
    case 'link':
      return <EmbedLinkContent initialUrl={url} onNewUrl={onSubmit} />
    case 'giphy':
      return <GiphyContent onNewUrl={onSubmit} />
  }
}

type ContentProps = { initialUrl?: string; onNewUrl: (url: string) => void }

const UploadFileContent = ({ onNewUrl }: ContentProps) => {
  const { typebot } = useTypebot()
  return (
    <Flex justify="center" py="2">
      <UploadButton
        filePath={`public/typebots/${typebot?.id}`}
        onFileUploaded={onNewUrl}
        includeFileName
        colorScheme="blue"
      >
        Choose an image
      </UploadButton>
    </Flex>
  )
}

const EmbedLinkContent = ({ initialUrl, onNewUrl }: ContentProps) => {
  const [imageUrl, setImageUrl] = useState(initialUrl ?? '')
  const [debouncedImageUrl] = useDebounce(imageUrl, 100)

  useEffect(() => {
    if (initialUrl === debouncedImageUrl) return
    onNewUrl(imageUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedImageUrl])

  return (
    <Stack py="2">
      <Input
        placeholder={'Paste the image link...'}
        onChange={setImageUrl}
        defaultValue={imageUrl}
      />
    </Stack>
  )
}

const GiphyContent = ({ onNewUrl }: ContentProps) => {
  if (!process.env.NEXT_PUBLIC_GIPHY_API_KEY)
    return <Text>NEXT_PUBLIC_GIPHY_API_KEY is missing in environment</Text>
  return (
    <SearchContextManager
      apiKey={process.env.NEXT_PUBLIC_GIPHY_API_KEY as string}
    >
      <GiphySearch onSubmit={onNewUrl} />
    </SearchContextManager>
  )
}
