import test, { expect, Page } from '@playwright/test'
import {
  createTypebots,
  importTypebotInDatabase,
  parseDefaultBlockWithStep,
} from '../services/database'
import { defaultTextInputOptions, InputStepType } from 'models'
import { generate } from 'short-uuid'
import path from 'path'

test.describe.parallel('Editor', () => {
  test('Edges connection should work', async ({ page }) => {
    const typebotId = generate()
    await createTypebots([
      {
        id: typebotId,
      },
    ])
    await page.goto(`/typebots/${typebotId}/edit`)
    await page.dragAndDrop('text=Button', '#editor-container', {
      targetPosition: { x: 800, y: 400 },
    })
    await page.dragAndDrop(
      'text=Text >> nth=0',
      '[data-testid="block"] >> nth=1',
      {
        targetPosition: { x: 100, y: 50 },
      }
    )
    await page.dragAndDrop(
      '[data-testid="endpoint"]',
      '[data-testid="block"] >> nth=1',
      { targetPosition: { x: 100, y: 10 } }
    )
    await expect(page.locator('[data-testid="edge"]')).toBeVisible()
    await page.dragAndDrop(
      '[data-testid="endpoint"]',
      '[data-testid="step"] >> nth=1'
    )
    await expect(page.locator('[data-testid="edge"]')).toBeVisible()
    await page.dragAndDrop('text=Date', '#editor-container', {
      targetPosition: { x: 1000, y: 800 },
    })
    await page.dragAndDrop(
      '[data-testid="endpoint"] >> nth=2',
      '[data-testid="block"] >> nth=2',
      {
        targetPosition: { x: 100, y: 10 },
      }
    )
    await expect(page.locator('[data-testid="edge"] >> nth=0')).toBeVisible()
    await expect(page.locator('[data-testid="edge"] >> nth=1')).toBeVisible()
  })
  test('Drag and drop steps and items should work', async ({ page }) => {
    const typebotId = generate()
    await importTypebotInDatabase(
      path.join(__dirname, '../fixtures/typebots/editor/buttonsDnd.json'),
      {
        id: typebotId,
      }
    )

    // Steps dnd
    await page.goto(`/typebots/${typebotId}/edit`)
    await expect(page.locator('[data-testid="step"] >> nth=1')).toHaveText(
      'Hello!'
    )
    await page.dragAndDrop('text=Hello', 'text=Item 1')
    await expect(page.locator('[data-testid="step"] >> nth=2')).toHaveText(
      'Hello!'
    )
    await page.dragAndDrop('text=Hello', '[data-testid="step"] >> text=Start')
    await expect(page.locator('text=Block #4')).toBeVisible()
    await page.dragAndDrop('text=Hello', 'text=Block #2')
    await expect(page.locator('[data-testid="step"] >> nth=3')).toHaveText(
      'Hello!'
    )

    // Items dnd
    await expect(page.locator('[data-testid="item"] >> nth=0')).toHaveText(
      'Item 1'
    )
    await page.dragAndDrop('text=Item 1', 'text=Item 3')
    await expect(page.locator('[data-testid="item"] >> nth=2')).toHaveText(
      'Item 1'
    )
    await expect(page.locator('[data-testid="item"] >> nth=1')).toHaveText(
      'Item 3'
    )
    await page.dragAndDrop('text=Item 3', 'text=Item 2-3')
    await expect(page.locator('[data-testid="item"] >> nth=6')).toHaveText(
      'Item 3'
    )
  })
  test('Undo / Redo buttons should work', async ({ page }) => {
    const typebotId = generate()
    await createTypebots([
      {
        id: typebotId,
        ...parseDefaultBlockWithStep({
          type: InputStepType.TEXT,
          options: defaultTextInputOptions,
        }),
      },
    ])

    await page.goto(`/typebots/${typebotId}/edit`)
    await page.click('text=Block #1', { button: 'right' })
    await page.click('text=Delete')
    await expect(page.locator('text=Block #1')).toBeHidden()
    await page.click('button[aria-label="Undo"]')
    await expect(page.locator('text=Block #1')).toBeVisible()
    await page.click('button[aria-label="Redo"]')
    await expect(page.locator('text=Block #1')).toBeHidden()
  })
})
