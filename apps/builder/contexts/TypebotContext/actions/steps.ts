import { Step, StepType, Typebot } from 'models'
import { parseNewStep } from 'services/typebots'
import { Updater } from 'use-immer'
import { WritableDraft } from 'immer/dist/types/types-external'

export type StepsActions = {
  createStep: (blockId: string, step: StepType | Step, index?: number) => void
  updateStep: (
    stepId: string,
    updates: Partial<Omit<Step, 'id' | 'type'>>
  ) => void
  deleteStep: (stepId: string) => void
}

export const stepsAction = (setTypebot: Updater<Typebot>): StepsActions => ({
  createStep: (blockId: string, step: StepType | Step, index?: number) => {
    setTypebot((typebot) => {
      createStepDraft(typebot, step, blockId, index)
    })
  },
  updateStep: (stepId: string, updates: Partial<Omit<Step, 'id' | 'type'>>) =>
    setTypebot((typebot) => {
      typebot.steps.byId[stepId] = { ...typebot.steps.byId[stepId], ...updates }
    }),
  deleteStep: (stepId: string) => {
    setTypebot((typebot) => {
      deleteStepDraft(typebot, stepId)
    })
  },
})

export const deleteStepDraft = (
  typebot: WritableDraft<Typebot>,
  stepId: string
) => {
  delete typebot.steps.byId[stepId]
  const index = typebot.steps.allIds.indexOf(stepId)
  if (index !== -1) typebot.steps.allIds.splice(index, 1)
}

export const createStepDraft = (
  typebot: WritableDraft<Typebot>,
  step: StepType | Step,
  blockId: string,
  index?: number
) => {
  const newStep = typeof step === 'string' ? parseNewStep(step, blockId) : step
  typebot.steps.byId[newStep.id] = newStep
  typebot.steps.allIds.push(newStep.id)
  typebot.blocks.byId[blockId].stepIds.splice(index ?? 0, 0, newStep.id)
}
