import { Block, Step, Target } from 'models'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

export const stubLength = 20
export const blockWidth = 300
export const blockAnchorsOffset = {
  left: {
    x: 0,
    y: 20,
  },
  top: {
    x: blockWidth / 2,
    y: 0,
  },
  right: {
    x: blockWidth,
    y: 20,
  },
}
export const firstStepOffsetY = 88
export const spaceBetweenSteps = 62

export type Coordinates = { x: number; y: number }

type Position = Coordinates & { scale: number }

export type Anchor = {
  coordinates: Coordinates
}

export type Node = Omit<Block, 'steps'> & {
  steps: (Step & {
    sourceAnchorsPosition: { left: Coordinates; right: Coordinates }
  })[]
}

const graphPositionDefaultValue = { x: 400, y: 100, scale: 1 }

type ConnectingIdsProps = {
  source: { blockId: string; stepId: string }
  target?: Target
} | null

type PreviewingIdsProps = { sourceId?: string; targetId?: string }

const graphContext = createContext<{
  graphPosition: Position
  setGraphPosition: Dispatch<SetStateAction<Position>>
  connectingIds: ConnectingIdsProps
  setConnectingIds: Dispatch<SetStateAction<ConnectingIdsProps>>
  previewingIds: PreviewingIdsProps
  setPreviewingIds: Dispatch<SetStateAction<PreviewingIdsProps>>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
}>({
  graphPosition: graphPositionDefaultValue,
  connectingIds: null,
})

export const GraphProvider = ({ children }: { children: ReactNode }) => {
  const [graphPosition, setGraphPosition] = useState(graphPositionDefaultValue)
  const [connectingIds, setConnectingIds] = useState<ConnectingIdsProps>(null)
  const [previewingIds, setPreviewingIds] = useState<PreviewingIdsProps>({})

  return (
    <graphContext.Provider
      value={{
        graphPosition,
        setGraphPosition,
        connectingIds,
        setConnectingIds,
        previewingIds,
        setPreviewingIds,
      }}
    >
      {children}
    </graphContext.Provider>
  )
}

export const useGraph = () => useContext(graphContext)
