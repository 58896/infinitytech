'use client'

import { useState, useTransition, useEffect } from 'react'
import { getTestimonials, type TestimonialItem } from '@/lib/db/testimonials'
import { createTestimonial, updateTestimonial, deleteTestimonial } from '@/lib/actions/testimonials'

type Row = TestimonialItem & { id?: string }

const EMPTY: Row = {
  initials: '', name_ar: '', name_en: '', role_ar: '', role_en: '', content_ar: '', content_en: '',
}

function Modal({ item, onClose, onSave }: { item: Row | null; onClose: () => void; onSave: (fd: FormData, id?: string) => void }) {
  if (!item) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)' }}>
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 space-y-5" style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">{item.id ? 'Edit Testimonial' : 'New Testimonial'}</h2>
          <button onClick={onClose} className="text-white/40 hover:text-white/70">✕</button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onSave(new FormData(e.currentTarget), item.id) }} className="space-y-4">
          <input type="hidden" name="is_published" value="true" />
          <input type="hidden" name="sort_order" value="0" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Name (EN) *</label>
              <input name="name_en" required defaultValue={item.name_en} className="admin-input w-full" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Name (AR) *</label>
              <input name="name_ar" required defaultValue={item.name_ar} dir="rtl" className="admin-input w-full" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Role (EN) *</label>
              <input name="role_en" required defaultValue={item.role_en} className="admin-input w-full" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Role (AR) *</label>
              <input name="role_ar" required defaultValue={item.role_ar} dir="rtl" className="admin-input w-full" />
            </div>
          </div>

          <div>
            <label className="block text-xs text-white/40 mb-1.5">Initials *</label>
            <input name="initials" required defaultValue={item.initials} className="admin-input w-24" placeholder="م.ع" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Testimonial (EN) *</label>
              <textarea name="content_en" required defaultValue={item.content_en} rows={4} className="admin-input w-full resize-none" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Testimonial (AR) *</label>
              <textarea name="content_ar" required defaultValue={item.content_ar} rows={4} dir="rtl" className="admin-input w-full resize-none" />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button type="submit" className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: 'linear-gradient(90deg,#7b2ff7,#ff4da6)' }}>
              {item.id ? 'Update' : 'Create'}
            </button>
            <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl text-sm text-white/50" style={{ background: 'rgba(255,255,255,0.05)' }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function AdminTestimonialsPage() {
  const [items, setItems] = useState<Row[]>([])
  const [modal, setModal] = useState<Row | null>(null)
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState('')

  function flash(msg: string) { setMessage(msg); setTimeout(() => setMessage(''), 3000) }

  useEffect(() => { getTestimonials().then(setItems) }, [])

  function handleSave(fd: FormData, id?: string) {
    startTransition(async () => {
      const res = id ? await updateTestimonial(id, fd) : await createTestimonial(fd)
      if (res.error) { flash(`Error: ${res.error}`); return }
      flash(id ? 'Updated!' : 'Created!')
      setModal(null)
      getTestimonials().then(setItems)
    })
  }

  function handleDelete(id: string) {
    if (!confirm('Delete this testimonial?')) return
    startTransition(async () => {
      const res = await deleteTestimonial(id)
      if (res.error) { flash(`Error: ${res.error}`); return }
      flash('Deleted.')
      getTestimonials().then(setItems)
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Testimonials</h1>
          <p className="text-white/40 text-sm mt-1">{items.length} testimonials</p>
        </div>
        <button
          onClick={() => setModal(EMPTY)}
          className="px-4 py-2 rounded-xl text-sm font-semibold text-white"
          style={{ background: 'linear-gradient(90deg,#7b2ff7,#ff4da6)' }}
        >
          + New Testimonial
        </button>
      </div>

      {message && (
        <div className="px-4 py-3 rounded-xl text-sm text-white/80" style={{ background: 'rgba(0,114,255,0.1)', border: '1px solid rgba(0,114,255,0.2)' }}>
          {message}
        </div>
      )}

      <div className="space-y-3">
        {items.map((t, i) => (
          <div key={(t as Row & { id?: string }).id ?? i} className="rounded-2xl p-5" style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0" style={{ background: 'linear-gradient(135deg,#00c6ff,#0072ff)' }}>
                {t.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white text-sm">{t.name_en}</div>
                <div className="text-xs text-white/40 mt-0.5">{t.role_en}</div>
                <p className="text-white/60 text-sm mt-2 leading-relaxed line-clamp-2">{t.content_en}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setModal({ ...t, id: (t as Row & { id?: string }).id })}
                  className="px-3 py-1.5 rounded-lg text-xs text-white/60 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete((t as Row & { id?: string }).id ?? '')}
                  disabled={isPending}
                  className="px-3 py-1.5 rounded-lg text-xs text-red-400/60 hover:text-red-400 transition-colors"
                  style={{ background: 'rgba(239,68,68,0.06)' }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal item={modal} onClose={() => setModal(null)} onSave={handleSave} />
    </div>
  )
}
