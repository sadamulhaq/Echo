import { env } from '../env'
import type { ApiClient } from './client'

export interface Article {
  id: string
  slug: string | null
  status: 'draft' | 'published'
}

/** Turns the org's public help center on (idempotent) and returns its public base URL. */
export async function enableHelpCenter(api: ApiClient): Promise<string> {
  const settings = await api.put<{ slug: string }>('/help-center/settings', { data: { enabled: true } })
  // .env.e2e serves help centers by path (HELP_CENTER_PUBLIC_MODE=path), as self-hosters do.
  return `${env.backendUrl}/help/${settings.slug}`
}

export async function createArticle(api: ApiClient, article: { question: string; answer: string }): Promise<Article> {
  return api.post<Article>('/help-center/faqs', { data: { ...article, status: 'draft' } })
}

export async function setArticleStatus(api: ApiClient, id: string, status: Article['status']): Promise<Article> {
  return api.put<Article>(`/help-center/faqs/${id}`, { data: { status } })
}

/** The help center's chat: which agent's widget it embeds, and whether it shows. */
export interface HelpCenterChat {
  agentId: string | null
  enabled: boolean
}

export async function helpCenterChat(api: ApiClient): Promise<HelpCenterChat> {
  const settings = await api.get<{ agent_id: string | null; chat_widget_enabled: boolean }>('/help-center/settings')
  return { agentId: settings.agent_id, enabled: settings.chat_widget_enabled }
}

/** Puts `agentId`'s widget on every help center page (or takes it off). */
export async function setHelpCenterChat(api: ApiClient, chat: HelpCenterChat): Promise<void> {
  await api.put('/help-center/settings', { data: { agent_id: chat.agentId, chat_widget_enabled: chat.enabled } })
}
