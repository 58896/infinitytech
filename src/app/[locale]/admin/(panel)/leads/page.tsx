'use client'

import { useState, useTransition, useEffect } from 'react'
import { createAdminClient, isAdminConfigured } from '@/lib/supabase/admin'
import { updateLeadStatus, deleteLead } from '@/lib/actions/leads'

interface Lead {
  id: string
  full_name: string
  email: string
  phone: string | null
  brand_name: string | null
  num_locations: string | null
  country: string | null
  message: string | null
  wants_demo: boolean
  status: 'new' | 'read' | 'responded'
  created_at: string
}

const STATUS_STYLES = {
  new:       { bg: 'rgba(0,198,255,0.12)', color: '#00c6ff', label: 'New' },
  read:      { bg: 'rgba(255,160,0,0.12)',  color: '#ffa000', label: 'Read' },
  responded: { bg: 'rgba(34,197,94,0.12)',  color: '#22c55e', label: 'Responded' },
}

function useLeads() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)

  async function reload() {
    if (!isAdminConfigured()) { setLoading(false); return }
    const supabase = createAdminClient()
    const { data } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
    setLeads((data ?? []) as Lead[])
    setLoading(false)
  }

  useEffect(() => { reload() }, [])
  return { leads, loading, reload }
}

export default function AdminLeadsPage() {
  const { leads, loading, reload } = useLeads()
  const [expanded, setExpanded] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'responded'>('all')

  const filtered = filter === 'all' ? leads : leads.filter((l) => l.status === filter)

  function handleStatus(id: string, status: 'new' | 'read' | 'responded') {
    startTransition(async () => {
      await updateLeadStatus(id, status)
      reload()
    })
  }

  function handleDelete(id: string) {
    if (!confirm('Delete this lead?')) return
    startTransition(async () => {
      await deleteLead(id)
      reload()
    })
  }

  function exportCSV() {
    const headers = ['Name', 'Email', 'Phone', 'Brand', 'Locations', 'Country', 'Demo', 'Status', 'Date']
    const rows = leads.map((l) => [
      l.full_name, l.email, l.phone ?? '', l.brand_name ?? '',
      l.num_locations ?? '', l.country ?? '',
      l.wants_demo ? 'Yes' : 'No', l.status,
      new Date(l.created_at).toLocaleDateString(),
    ])
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${v}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = 'leads.csv'; a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white">Leads Inbox</h1>
          <p className="text-white/40 text-sm mt-1">{leads.length} total submissions</p>
        </div>
        <div className="flex items-center gap-2">
          {(['all', 'new', 'read', 'responded'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                filter === f ? 'text-white' : 'text-white/40 hover:text-white/70'
              }`}
              style={filter === f ? { background: 'rgba(0,114,255,0.2)', border: '1px solid rgba(0,114,255,0.3)' } : { background: 'rgba(255,255,255,0.04)' }}
            >
              {f}
            </button>
          ))}
          <button
            onClick={exportCSV}
            className="ml-2 px-4 py-1.5 rounded-lg text-xs font-semibold text-white/70 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Export CSV
          </button>
        </div>
      </div>

      {!isAdminConfigured() && (
        <div className="px-5 py-4 rounded-2xl text-sm" style={{ background: 'rgba(255,160,0,0.08)', border: '1px solid rgba(255,160,0,0.2)' }}>
          <span className="text-[#ffa000] font-medium">⚠ Supabase not connected</span>
          <span className="text-white/50 ml-1">— leads will appear here once connected.</span>
        </div>
      )}

      {loading ? (
        <div className="text-center py-20 text-white/30">Loading…</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-white/30">No leads yet.</div>
      ) : (
        <div className="space-y-2">
          {filtered.map((lead) => (
            <div
              key={lead.id}
              className="rounded-2xl overflow-hidden transition-all"
              style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div
                className="flex items-center gap-4 px-5 py-4 cursor-pointer"
                onClick={() => setExpanded(expanded === lead.id ? null : lead.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-white text-sm">{lead.full_name}</span>
                    {lead.wants_demo && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(123,47,247,0.15)', color: '#a855f7' }}>
                        Demo request
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: STATUS_STYLES[lead.status].bg, color: STATUS_STYLES[lead.status].color }}>
                      {STATUS_STYLES[lead.status].label}
                    </span>
                  </div>
                  <div className="text-xs text-white/40 mt-0.5 truncate">{lead.email} {lead.brand_name ? `· ${lead.brand_name}` : ''}</div>
                </div>
                <div className="text-xs text-white/30 flex-shrink-0">
                  {new Date(lead.created_at).toLocaleDateString()}
                </div>
              </div>

              {expanded === lead.id && (
                <div className="px-5 pb-5 space-y-4 border-t border-white/5 pt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                    {[
                      ['Email', lead.email],
                      ['Phone', lead.phone],
                      ['Brand', lead.brand_name],
                      ['Locations', lead.num_locations],
                      ['Country', lead.country],
                      ['Demo?', lead.wants_demo ? 'Yes' : 'No'],
                    ].map(([k, v]) => v ? (
                      <div key={String(k)}>
                        <div className="text-xs text-white/30 mb-0.5">{k}</div>
                        <div className="text-white/80">{String(v)}</div>
                      </div>
                    ) : null)}
                  </div>

                  {lead.message && (
                    <div>
                      <div className="text-xs text-white/30 mb-1">Message</div>
                      <p className="text-white/70 text-sm leading-relaxed">{lead.message}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-2 flex-wrap">
                    {(['new', 'read', 'responded'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => handleStatus(lead.id, s)}
                        disabled={isPending || lead.status === s}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors disabled:opacity-40 ${
                          lead.status === s ? 'text-white' : 'text-white/50 hover:text-white/80'
                        }`}
                        style={lead.status === s
                          ? { background: STATUS_STYLES[s].bg, color: STATUS_STYLES[s].color }
                          : { background: 'rgba(255,255,255,0.05)' }
                        }
                      >
                        Mark {s}
                      </button>
                    ))}
                    <button
                      onClick={() => handleDelete(lead.id)}
                      disabled={isPending}
                      className="ml-auto px-3 py-1.5 rounded-lg text-xs font-medium text-red-400/60 hover:text-red-400 transition-colors"
                      style={{ background: 'rgba(239,68,68,0.06)' }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
