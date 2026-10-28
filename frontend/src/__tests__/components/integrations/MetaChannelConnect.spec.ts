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

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'

vi.mock('vue-sonner', () => ({ toast: { success: vi.fn(), error: vi.fn() } }))
vi.mock('@/services/agent', () => ({
  agentService: { getOrganizationAgents: vi.fn().mockResolvedValue([{ id: 'ag1', name: 'Bot' }]) },
}))
vi.mock('@/services/channels', () => ({
  default: {
    getEmbeddedSignupConfig: vi.fn().mockResolvedValue({ enabled: false }),
    connectWhatsApp: vi.fn(),
  },
}))

import channelsService from '@/services/channels'
import MetaChannelConnect from '../../../components/integrations/MetaChannelConnect.vue'
import type { ChannelAccount } from '@/services/channels'

const ACCOUNT: ChannelAccount = {
  id: 'acc1', channel_type: 'whatsapp', external_account_id: 'PN1',
  display_name: 'Test Number', is_active: true, agent_id: 'ag1',
}

const mountModal = (existingAccount: ChannelAccount) =>
  mount(MetaChannelConnect, {
    props: { channel: 'whatsapp', existingAccount },
    global: { stubs: { 'font-awesome-icon': true } },
  })

describe('MetaChannelConnect reconnect prompt', () => {
  beforeEach(() => vi.clearAllMocks())

  it('does not offer a reconnect for a healthy account', async () => {
    const wrapper = mountModal(ACCOUNT)
    await flushPromises()
    expect(wrapper.find('.meta-reconnect').exists()).toBe(false)
    expect(wrapper.text()).toContain('is connected')
  })

  it('offers a reconnect when Meta stopped accepting the account', async () => {
    const wrapper = mountModal({ ...ACCOUNT, needs_reconnect: true })
    await flushPromises()
    expect(wrapper.find('.meta-reconnect').text()).toContain('Reconnect to resume replies')
  })

  it('Reconnect opens the credentials form, and connecting again clears the prompt', async () => {
    vi.mocked(channelsService.connectWhatsApp).mockResolvedValue({ ...ACCOUNT, needs_reconnect: false })
    const wrapper = mountModal({ ...ACCOUNT, needs_reconnect: true })
    await flushPromises()

    await wrapper.find('.meta-reconnect button').trigger('click')
    expect(wrapper.find('#meta-phone_number_id').exists()).toBe(true)

    await wrapper.find('#meta-phone_number_id').setValue('PN1')
    await wrapper.find('#meta-access_token').setValue('new-token')
    await wrapper.findAll('.meta-actions .meta-btn-primary').at(-1)!.trigger('click')
    await flushPromises()

    expect(channelsService.connectWhatsApp).toHaveBeenCalledWith(
      expect.objectContaining({ phone_number_id: 'PN1', access_token: 'new-token' }))
    expect(wrapper.find('.meta-reconnect').exists()).toBe(false)
    expect(wrapper.text()).toContain('is connected')
  })
})
