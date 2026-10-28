/*
Copyright 2024-2026 ChatterMate

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { afterEach, describe, expect, it } from 'vitest'
import { subscriptionStorage } from '@/utils/storage'

const storeSubscription = (plan: Record<string, unknown>) =>
  subscriptionStorage.setCurrentSubscription({ status: 'trial', plan } as never)

describe('subscriptionStorage.getPlanLimits', () => {
  afterEach(() => localStorage.clear())

  it('keeps an unlimited agent allowance unlimited', () => {
    // null is "no cap" on the backend; turning it into 0 locked agent creation
    // for every unlimited plan (found by the e2e enterprise suite).
    storeSubscription({ max_agents: null })
    expect(subscriptionStorage.getPlanLimits().maxAgents).toBeNull()
  })

  it('passes a capped allowance through', () => {
    storeSubscription({ max_agents: 5 })
    expect(subscriptionStorage.getPlanLimits().maxAgents).toBe(5)
  })

  it('allows nothing without a subscription', () => {
    expect(subscriptionStorage.getPlanLimits().maxAgents).toBe(0)
  })
})
