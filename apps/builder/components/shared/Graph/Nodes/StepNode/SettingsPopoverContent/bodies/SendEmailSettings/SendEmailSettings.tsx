import { Stack, useDisclosure, Text } from '@chakra-ui/react'
import { CredentialsDropdown } from 'components/shared/CredentialsDropdown'
import {
  InputWithVariableButton,
  TextareaWithVariableButton,
} from 'components/shared/TextboxWithVariableButton'
import { CredentialsType, SendEmailOptions } from 'models'
import React from 'react'
import { SmtpConfigModal } from './SmtpConfigModal'

type Props = {
  options: SendEmailOptions
  onOptionsChange: (options: SendEmailOptions) => void
}

export const SendEmailSettings = ({ options, onOptionsChange }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleCredentialsSelect = (credentialsId: string) =>
    onOptionsChange({
      ...options,
      credentialsId,
    })

  const handleToChange = (recipientsStr: string) => {
    const recipients: string[] = recipientsStr
      .split(',')
      .map((str) => str.trim())
    onOptionsChange({
      ...options,
      recipients,
    })
  }

  const handleSubjectChange = (subject: string) =>
    onOptionsChange({
      ...options,
      subject,
    })

  const handleBodyChange = (body: string) =>
    onOptionsChange({
      ...options,
      body,
    })

  return (
    <Stack spacing={4}>
      <Stack>
        <Text>From: </Text>
        <CredentialsDropdown
          type={CredentialsType.SMTP}
          currentCredentialsId={options.credentialsId}
          onCredentialsSelect={handleCredentialsSelect}
          onCreateNewClick={onOpen}
          defaultCredentialLabel={
            process.env.NEXT_PUBLIC_EMAIL_NOTIFICATIONS_FROM_EMAIL
          }
        />
      </Stack>
      <Stack>
        <Text>To: </Text>
        <InputWithVariableButton
          onChange={handleToChange}
          initialValue={options.recipients.join(', ')}
          placeholder="email1@gmail.com, email2@gmail.com"
        />
      </Stack>
      <Stack>
        <Text>Subject: </Text>
        <InputWithVariableButton
          data-testid="subject-input"
          onChange={handleSubjectChange}
          initialValue={options.subject ?? ''}
        />
      </Stack>
      <Stack>
        <Text>Body: </Text>
        <TextareaWithVariableButton
          data-testid="body-input"
          minH="300px"
          onChange={handleBodyChange}
          initialValue={options.body ?? ''}
        />
      </Stack>
      <SmtpConfigModal
        isOpen={isOpen}
        onClose={onClose}
        onNewCredentials={handleCredentialsSelect}
      />
    </Stack>
  )
}
