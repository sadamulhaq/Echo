import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import AxeBuilder from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'
import { step } from './step'

/**
 * Accessibility checks against a baseline. Each screen may keep the serious and
 * critical axe violations it has today (a11y-baseline/<screen>.json); anything
 * new fails, and fixing one shrinks the baseline. Regenerate after a fix with
 * UPDATE_A11Y_BASELINE=1 npx playwright test specs/a11y. One file per screen, so
 * parallel workers updating different screens never overwrite each other.
 */
const BASELINE_DIR = fileURLToPath(new URL('../../a11y-baseline/', import.meta.url))
const SERIOUS = new Set(['serious', 'critical'])

function baselineFile(screen: string): string {
  return `${BASELINE_DIR}${screen}.json`
}

function readBaseline(screen: string): string[] {
  const file = baselineFile(screen)
  return existsSync(file) ? (JSON.parse(readFileSync(file, 'utf8')) as string[]) : []
}

/**
 * Rule ids of the serious and critical violations on the page now (iframes
 * included). Each offending element, with axe's explanation (for contrast: the
 * colours and the ratio), is attached to the test so a failure says what to fix.
 */
async function violations(page: Page, screen: string): Promise<string[]> {
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()
  const serious = results.violations.filter((v) => SERIOUS.has(v.impact ?? ''))
  if (serious.length) {
    const details = serious.map((v) => ({ rule: v.id, nodes: v.nodes.map((n) => ({ target: n.target, why: n.failureSummary })) }))
    await test.info().attach(`axe-${screen}.json`, { body: JSON.stringify(details, null, 2), contentType: 'application/json' })
  }
  return [...new Set(serious.map((v) => v.id))].sort()
}

export async function expectNoNewA11yViolations(page: Page, screen: string): Promise<void> {
  await step(`Accessibility check: ${screen}`, async () => {
    const found = await violations(page, screen)
    if (process.env.UPDATE_A11Y_BASELINE) {
      mkdirSync(BASELINE_DIR, { recursive: true })
      writeFileSync(baselineFile(screen), `${JSON.stringify(found)}\n`)
      return
    }
    const known = new Set(readBaseline(screen))
    expect(found.filter((id) => !known.has(id)), `new accessibility violations on ${screen}`).toEqual([])
  })
}
