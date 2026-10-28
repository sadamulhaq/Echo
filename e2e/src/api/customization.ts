import type { ApiClient } from './client'

/** The agent's widget look (Agent → Customize), partial updates allowed. */
export async function customizeAgent(api: ApiClient, agentId: string, customization: Record<string, unknown>): Promise<void> {
  await api.post(`/agent/${agentId}/customization`, { data: customization })
}
