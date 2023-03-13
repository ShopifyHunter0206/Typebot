import React from 'react'
import { Text } from '@chakra-ui/react'
import { EmailInputBlock } from 'models'
import { WithVariableContent } from '@/features/graph/components/Nodes/BlockNode/BlockNodeContent/WithVariableContent'

type Props = {
  variableId?: string
  placeholder: EmailInputBlock['options']['labels']['placeholder']
}

export const EmailInputNodeContent = ({ variableId, placeholder }: Props) =>
  variableId ? (
    <WithVariableContent variableId={variableId} />
  ) : (
    <Text color={'gray.500'}>{placeholder}</Text>
  )
