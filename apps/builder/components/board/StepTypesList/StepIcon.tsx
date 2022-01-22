import { IconProps } from '@chakra-ui/react'
import {
  CalendarIcon,
  ChatIcon,
  CheckSquareIcon,
  EditIcon,
  EmailIcon,
  ExternalLinkIcon,
  FilmIcon,
  FilterIcon,
  FlagIcon,
  GlobeIcon,
  ImageIcon,
  NumberIcon,
  PhoneIcon,
  TextIcon,
  WebhookIcon,
} from 'assets/icons'
import { GoogleAnalyticsLogo, GoogleSheetsLogo } from 'assets/logos'
import {
  BubbleStepType,
  InputStepType,
  IntegrationStepType,
  LogicStepType,
  StepType,
} from 'models'
import React from 'react'

type StepIconProps = { type: StepType } & IconProps

export const StepIcon = ({ type, ...props }: StepIconProps) => {
  switch (type) {
    case BubbleStepType.TEXT:
      return <ChatIcon {...props} />
    case BubbleStepType.IMAGE:
      return <ImageIcon {...props} />
    case BubbleStepType.VIDEO:
      return <FilmIcon {...props} />
    case InputStepType.TEXT:
      return <TextIcon {...props} />
    case InputStepType.NUMBER:
      return <NumberIcon {...props} />
    case InputStepType.EMAIL:
      return <EmailIcon {...props} />
    case InputStepType.URL:
      return <GlobeIcon {...props} />
    case InputStepType.DATE:
      return <CalendarIcon {...props} />
    case InputStepType.PHONE:
      return <PhoneIcon {...props} />
    case InputStepType.CHOICE:
      return <CheckSquareIcon {...props} />
    case LogicStepType.SET_VARIABLE:
      return <EditIcon {...props} />
    case LogicStepType.CONDITION:
      return <FilterIcon {...props} />
    case LogicStepType.REDIRECT:
      return <ExternalLinkIcon {...props} />
    case IntegrationStepType.GOOGLE_SHEETS:
      return <GoogleSheetsLogo {...props} />
    case IntegrationStepType.GOOGLE_ANALYTICS:
      return <GoogleAnalyticsLogo {...props} />
    case IntegrationStepType.WEBHOOK:
      return <WebhookIcon />
    case 'start':
      return <FlagIcon {...props} />
    default:
      return <></>
  }
}
