import { FormLabel, Stack } from '@chakra-ui/react'
import { DebouncedInput } from 'components/shared/DebouncedInput'
import { SwitchWithLabel } from 'components/shared/SwitchWithLabel'
import { VariableSearchInput } from 'components/shared/VariableSearchInput'
import { TextInputOptions, Variable } from 'models'
import React from 'react'

type TextInputSettingsBodyProps = {
  options?: TextInputOptions
  onOptionsChange: (options: TextInputOptions) => void
}

export const TextInputSettingsBody = ({
  options,
  onOptionsChange,
}: TextInputSettingsBodyProps) => {
  const handlePlaceholderChange = (placeholder: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, placeholder } })
  const handleButtonLabelChange = (button: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, button } })
  const handleLongChange = (isLong: boolean) =>
    onOptionsChange({ ...options, isLong })
  const handleVariableChange = (variable: Variable) =>
    onOptionsChange({ ...options, variableId: variable.id })

  return (
    <Stack spacing={4}>
      <SwitchWithLabel
        id="switch"
        label="Long text?"
        initialValue={options?.isLong ?? false}
        onCheckChange={handleLongChange}
      />
      <Stack>
        <FormLabel mb="0" htmlFor="placeholder">
          Placeholder:
        </FormLabel>
        <DebouncedInput
          id="placeholder"
          initialValue={options?.labels?.placeholder ?? 'Type your answer...'}
          delay={100}
          onChange={handlePlaceholderChange}
        />
      </Stack>
      <Stack>
        <FormLabel mb="0" htmlFor="button">
          Button label:
        </FormLabel>
        <DebouncedInput
          id="button"
          initialValue={options?.labels?.button ?? 'Send'}
          delay={100}
          onChange={handleButtonLabelChange}
        />
      </Stack>
      <Stack>
        <FormLabel mb="0" htmlFor="variable">
          Save answer in a variable:
        </FormLabel>
        <VariableSearchInput
          initialVariableId={options?.variableId}
          onSelectVariable={handleVariableChange}
        />
      </Stack>
    </Stack>
  )
}
